/**
 * Bulk-update all service page.tsx files to pass preparedData to LocationServiceTemplate.
 *
 * Usage: node scripts/update-service-pages.mjs
 *
 * This script:
 * 1. Adds `import { prepareLocationServiceData } from "@/lib/locationServiceData";`
 * 2. Adds `const preparedData = prepareLocationServiceData(serviceSlug, locationSlug);`
 * 3. Adds `preparedData={preparedData}` prop to `<LocationServiceTemplate ... />`
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const servicesDir = join(process.cwd(), "src/app/services");

let updated = 0;
let skipped = 0;
let errors = 0;

for (const entry of readdirSync(servicesDir)) {
  const pagePath = join(servicesDir, entry, "page.tsx");
  try {
    statSync(pagePath);
  } catch {
    continue; // no page.tsx in this dir
  }

  let content = readFileSync(pagePath, "utf-8");

  // Skip if doesn't use LocationServiceTemplate
  if (!content.includes("LocationServiceTemplate")) {
    skipped++;
    continue;
  }

  // Skip if already updated
  if (content.includes("prepareLocationServiceData")) {
    skipped++;
    continue;
  }

  // 1. Add import after LocationServiceTemplate import line
  content = content.replace(
    /import LocationServiceTemplate from "@\/components\/templates\/LocationServiceTemplate";/,
    `import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";\nimport { prepareLocationServiceData } from "@/lib/locationServiceData";`
  );

  // 2. Extract serviceSlug and locationSlug from the existing code
  // Pattern: serviceSlug="xxx" and locations["yyy"]
  const serviceSlugMatch = content.match(/serviceSlug="([^"]+)"/);
  const locationSlugMatch = content.match(/locations\["([^"]+)"\]/);

  if (!serviceSlugMatch || !locationSlugMatch) {
    console.error(`Could not extract slugs from ${pagePath}`);
    errors++;
    continue;
  }

  const serviceSlug = serviceSlugMatch[1];
  const locationSlug = locationSlugMatch[1];

  // 3. Add preparedData const before the return statement in the default function
  // Find the pattern: "export default function XxxPage() {\n  return ("
  // and insert preparedData between function opening and return
  content = content.replace(
    /export default function (\w+)\(\) \{\s*\n\s*return \(/,
    `export default function $1() {\n  const preparedData = prepareLocationServiceData("${serviceSlug}", "${locationSlug}");\n  return (`
  );

  // 4. Add preparedData prop to LocationServiceTemplate
  content = content.replace(
    /(<LocationServiceTemplate\s[\s\S]*?)(\/\s*>)/,
    (match, before, close) => {
      // Check if preparedData prop already exists
      if (before.includes("preparedData")) return match;
      // Add preparedData prop before the closing />
      return `${before.trimEnd()}\n      preparedData={preparedData}\n    ${close}`;
    }
  );

  writeFileSync(pagePath, content, "utf-8");
  updated++;
}

console.log(`Done. Updated: ${updated}, Skipped: ${skipped}, Errors: ${errors}`);
