import fs from 'fs';
import path from 'path';

/**
 * Automates submitting 200 URLs daily to the Google Indexing API.
 * Uses a state file to remember which URLs were submitted.
 */

const STATE_FILE = path.resolve(process.cwd(), 'indexing-state.json');
const KEY_PATH = path.resolve(process.cwd(), 'google-service-account.json');
const SITEMAP_URL = 'https://townmedialabs.com/sitemap.xml';
const DAILY_LIMIT = 150;

async function fetchSitemapUrls(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.statusText}`);
    const xml = await res.text();
    // Parse <loc> tags from sitemap
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    const urls = matches.map(m => m[1]);
    
    // Check if it's a sitemap index by looking for <sitemap> inside
    if (xml.includes('<sitemapindex')) {
        let allUrls = [];
        for (const loc of urls) {
            console.log(`Fetching sub-sitemap: ${loc}`);
            const subUrls = await fetchSitemapUrls(loc);
            allUrls = allUrls.concat(subUrls);
        }
        return [...new Set(allUrls)]; // Return unique URLs
    }
    return urls;
  } catch (error) {
    console.error(`Error fetching sitemap ${url}:`, error.message);
    return [];
  }
}

async function runDailyIndexer() {
  if (!fs.existsSync(KEY_PATH)) {
    console.error(`❌ Missing Google Service Account JSON key at: ${KEY_PATH}`);
    process.exit(1);
  }

  let state = {};
  if (fs.existsSync(STATE_FILE)) {
    try {
      state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    } catch(e) {
      console.warn('Could not parse indexing-state.json, starting fresh.');
      state = {};
    }
  }

  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
  const allUrls = await fetchSitemapUrls(SITEMAP_URL);

  if (allUrls.length === 0) {
    console.log("No URLs found in sitemap.");
    return;
  }

  // Clean URLs in case there are duplicates or weird whitespaces
  const cleanedUrls = [...new Set(allUrls.map(u => u.trim()))];

  const newUrls = cleanedUrls.filter(url => !state[url]);

  if (newUrls.length === 0) {
    console.log("All URLs have already been submitted!");
    return;
  }

  console.log(`Found ${cleanedUrls.length} total URLs, ${newUrls.length} are new/unsubmitted.`);

  const urlsToSubmit = newUrls.slice(0, DAILY_LIMIT);

  console.log(`Preparing to submit ${urlsToSubmit.length} URLs to Google...`);

  let googleapis;
  try {
    googleapis = await import('googleapis');
  } catch(e) {
    console.error("The 'googleapis' package is not installed. Please run: npm install googleapis");
    process.exit(1);
  }
  const { google } = googleapis;

  console.log(`Authenticating with Google...`);
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  let successCount = 0;
  for (const url of urlsToSubmit) {
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ [${res.status}] Submitted: ${url}`);
      state[url] = new Date().toISOString();
      successCount++;
      // Save state incrementally so we don't lose progress if script crashes
      fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
      // Give a tiny delay
      await new Promise(r => setTimeout(r, 100));
    } catch (error) {
      if (error.message.includes('Quota exceeded')) {
        console.error(`❌ Quota exceeded. Stopping for today.`);
        break;
      }
      console.error(`❌ Failed to submit ${url}:`, error.message);
    }
  }

  console.log(`\n🎉 Job completed. ${successCount} URLs successfully submitted today.`);
}

runDailyIndexer().catch(console.error);
