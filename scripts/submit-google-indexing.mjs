import fs from 'fs';
import path from 'path';

/**
 * Google Indexing API Integration Script
 * --------------------------------------
 * Requires a Google Cloud Service Account JSON Key and `googleapis` package.
 * Run `npm install googleapis` if not installed.
 */

try {
  import('googleapis').then(({ google }) => {
    const KEY_PATH = path.resolve(process.cwd(), 'google-service-account.json');

    // Make sure you place your Google Service Account JSON in the root directory
    if (!fs.existsSync(KEY_PATH)) {
      console.error(`❌ Missing Google Service Account JSON key at: ${KEY_PATH}`);
      console.error(`Please create a Service Account in Google Cloud, download the JSON key, and save it as "google-service-account.json" in the root directory.`);
      process.exit(1);
    }

    async function submitToGoogle(urls) {
      if (!urls || urls.length === 0) {
        console.log("No URLs to submit to Google Indexing API.");
        return;
      }

      console.log(`Authenticating with Google...`);
      const auth = new google.auth.GoogleAuth({
        keyFile: KEY_PATH,
        scopes: ['https://www.googleapis.com/auth/indexing'],
      });

      const authClient = await auth.getClient();
      const indexing = google.indexing({ version: 'v3', auth: authClient });

      for (const url of urls) {
        try {
          const res = await indexing.urlNotifications.publish({
            requestBody: {
              url: url,
              type: 'URL_UPDATED', // 'URL_UPDATED' or 'URL_DELETED'
            },
          });
          console.log(`✅ Successfully pushed ${url} to Google Indexing API. Status: ${res.status}`);
        } catch (error) {
          console.error(`❌ Failed to push ${url}:`, error.message);
        }
      }
    }

    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.warn("⚠️ provide URLs as arguments to submit to Google Indexing API.");
      console.warn("Example: node scripts/submit-google-indexing.mjs https://townmedialabs.ca/about-us");
      process.exit(0);
    }

    submitToGoogle(args);
  });
} catch (e) {
  console.error("The 'googleapis' package is not installed. Please run: npm install googleapis");
}
