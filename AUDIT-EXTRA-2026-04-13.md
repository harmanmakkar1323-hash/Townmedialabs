# Extended Issue List — Round 2 (Apr 13, 2026)

Companion to `AUDIT-2026-04-13.md`. These are additional issues I found on a
deeper pass. Several are more severe than what was in round one.

Legend: 🔴 critical · 🟠 high · 🟡 medium · 🟢 low

---

## 🔴 SHOWSTOPPERS (fix these first — business is losing money right now)

### S-1 🔴 Contact form does not send emails. All leads are lost.
`src/app/api/contact/route.ts:60` — the integration is still a `TODO`
comment. The route validates, logs `console.log` in dev only, then returns
`{success: true}` to the user. **In production no email is sent, nothing is
stored, no CRM is notified.** Every prospect that fills the form gets a
"We'll get back to you in 24 hours" message that you will never see.

Fix: integrate Resend / SendGrid / Postmark, or POST to a Zapier /
Make.com webhook, or at minimum write to a database. Also send an
auto-reply to the prospect from your domain.

### S-2 🔴 Newsletter signup does not subscribe anyone.
Same bug in `src/app/api/newsletter/route.ts:44`. All "subscribers" get a
fake success message. Your mailing list does not exist.

### S-3 🔴 `shouldNoindex()` is gutted — returns `false` for everything.
`src/utils/noindex.ts:41` has:

```ts
export function shouldNoindex(_serviceSlug: string, _locationSlug: string): boolean {
  return false;
}
```

The file above it has 40 lines of policy comments and sets
`CORE_SERVICES` / `NICHE_SERVICES` — all unused. The sitemap calls this
function to filter URLs but it never filters anything. Result: all 1,800+
geo pages go into the sitemap and get indexed, including the thin
`music-release-in-tokyo` / `branding-packaging-in-zurich` combinations
the code was supposed to exclude.

This is the root cause of the "scaled content abuse" exposure. Fix the
function body to implement the policy the comments describe.

### S-4 🔴 Case study client names look fabricated.
`/case-studies/` shows: BrightSmile Dental Clinic, LuxeThread Fashion,
PrimeView Realty Group, SpiceCraft Restaurants, CloudPulse Technologies,
Sterling & Associates, IronCore Fitness Studios, HomeRight Services.

These look like invented brand names designed to cover eight industries.
Combined with the "Trusted by" wall (Google/Netflix/Amazon) and hard-coded
`4.9/352 reviews`, a human buyer or a Google quality rater will conclude
the trust signals are fake. This is the single biggest reason sales
conversations don't close.

Fix: replace all 8 with the real named clients already in your
testimonials (Luxe Interiors, CB Builders, TechVault are mentioned with
full quotes) and one new study every month. Real clients, real logos,
real numbers, permission to publish. If you cannot name the client, use
"[Category leader, Punjab]" and publish the metrics — but do not invent
names.

---

## 🔴 SEVERE (site-wide impact)

### S-5 🔴 Hundreds of internal links point to `/contact` (no trailing slash).
With `trailingSlash: true` in `next.config.ts`, every click on
"Get in Touch" / "Book a Call" etc. triggers a 308 redirect to
`/contact/`. I found 40+ occurrences in nav, footer, hero, CTA, templates,
and multiple client components. Googlebot follows these too, wasting
crawl budget the same way the sitemap used to.

Offenders include `FooterHome2.tsx`, `NavbarHome2.tsx`, `InnerNavbar.tsx`,
`HeroHome2.tsx`, `FAQHome2.tsx`, `CTAHome2.tsx`, `StickyMobileCTA.tsx`,
`MeetTheTeam.tsx`, `ChandigarhServiceTemplate.tsx`, `ServicePageTemplate.tsx`,
`LocationServiceTemplate.tsx` (multiple), `IndustryPageV2Client.tsx`,
`AboutPageClient.tsx`, `BlogPageClient.tsx`, and more.

Fix: do a global find-replace from `href="/contact"` → `href="/contact/"`,
and same for `/services`, `/industries`, `/about`, `/privacy-policy`,
`/terms-of-service`, `/portfolio`, `/blog`, `/case-studies`, `/careers`,
`/free-tools`, `/locations`.

### S-6 🔴 `google-service-account.json` sits at repo root and is NOT in `.gitignore`.
The file is there with 0600 perms, but `.gitignore` only excludes
`node_modules`, `.next`, `.DS_Store`, `.pem`, and log files. Any `git add .`
will commit this file. If it is already in git history, the credential is
already leaked.

Fix:
1. `git ls-files google-service-account.json` — check if tracked.
2. If yes: `git rm --cached google-service-account.json`, rotate the
   service account key in Google Cloud, commit the removal, force-push
   history cleanup if the repo is private-shared.
3. Add to `.gitignore`:
   ```
   google-service-account.json
   *.json.key
   .env*
   ```

### S-7 🔴 Blog listing pagination is client-only.
`src/app/blog/BlogPageClient.tsx:32` uses React state
(`const [currentPage, setCurrentPage] = useState(1)`). URLs never change —
no `/blog/page/2/`, no `?page=2`. Googlebot sees 12 posts of 295 total on
`/blog/`. The other 283 are only reachable via the sitemap individual
URLs — meaning you have no category / chronological internal linking to
most of your content.

Fix: move pagination to the URL: `/blog/page/2/` or `/blog/?page=2`,
server-render each page, and add `<link rel="prev/next">`.

---

## 🟠 HIGH (search/business)

### H-1 🟠 Most cities (320 of 329) have no unique content in `locations.ts`.
`grep -c 'uniqueContent:' src/data/locations.ts` → 9 matches.
`grep -c 'slug:' src/data/locations.ts` → 329 entries.
So 320 city entries rely 100% on the hash-shuffled template. Combined with
S-3, Google is currently indexing all of them.

### H-2 🟠 Author entity contradictions.
`src/data/authors.ts` says:
- Raman Makkar → "Co-Founder & SEO Director"
- Arvinder Singh → "Owner & Founder"

But the homepage `ProfessionalService` schema in `layout.tsx` lists Raman
as founder (the previous audit flagged Owner & Founder conflict). Pick
one. Align authors.ts, layout.tsx, about page, and LinkedIn (Google cross-
references company / founder knowledge panel against LinkedIn).

### H-3 🟠 Author pages have no photo.
`authors.ts` makes `image` optional, and `raman-makkar` / `arvinder-singh`
omit it. Real photos are the #1 E-E-A-T visual signal. Add professional
headshots.

### H-4 🟠 Hard-coded AggregateRating exposes you to manual action.
`src/lib/schema.ts:228` injects `aggregateRating: {ratingValue: 4.9,
reviewCount: 352}` on every page. If you don't have 352 verifiable
reviews on an external platform, drop this entirely or connect it to a
real source (Google Business Profile API → cached JSON file, updated
weekly).

### H-5 🟠 The 13 pages with `| TML Agency` duplicated in the title
(already in the main audit as BUG-1).

### H-6 🟠 CTA language is inconsistent — 6 variants across the site.
I counted: "Get Started", "Get a Free Quote", "Get a Free Consultation",
"Get in Touch", "Book a Call", "Book a Free Strategy Call", "Book Free
Strategy Call", "Let's Talk", "Send Message", "Contact Us".

Pick two — one primary (e.g. "Book a Free Strategy Call") and one
secondary ("Get in Touch") — and globally replace.

### H-7 🟠 Hero is "Build brands. Drive growth." — no keyword.
Second sub-head is another slogan. Your competitors lead with their H1
keyword. Example rewrite:

> H1: "Digital Marketing Agency Delivering Brand & Revenue Growth"
> H2: "Full-service SEO, Google Ads, branding, and web development for
>      500+ brands across India, the US, UK, and UAE."

### H-8 🟠 Homepage title is "TML Agency | Global Digital Marketing & Branding Agency".
The strongest keyword ("digital marketing agency") is buried. In 2026,
Google rewrites titles ~40% of the time when yours is brand-first.
Consider: `"Global Digital Marketing & Branding Agency — TML Agency"`.

### H-9 🟠 Meta descriptions likely templated across geo pages.
Not verified at scale but the pattern in `cityServiceAutoContent.ts` and
the sitemap volume almost guarantees it. Add a `uniqueMeta` field per
city and noindex any page without one (tie in with S-3 fix).

### H-10 🟠 No city-to-city or service-to-city internal linking hub.
`/locations/` exists but doesn't form a link graph. Add a "cities we
serve" strip to each service page and a "services in [city]" strip to
each city page. PageRank flow and topical clustering both benefit.

---

## 🟠 PERFORMANCE / CORE WEB VITALS

### P-1 🟠 `.bak` files bloat the repo (969 KB total).
- `src/data/blogArticles.ts.bak` = 862 KB
- `src/data/serviceSeoContent.ts.bak` = 129 KB

These are not used but sit in the repo. Delete them. Also, the live
`blogArticles.ts` is **14,369 lines** (~880 KB). Move blog content to
MDX files or a CMS — it's ridiculous to parse this file on every build.

### P-2 🟠 `industries.ts` is 4,202 lines (~280 KB).
Same story. Content-as-code at this scale hurts build times and
ISR regeneration.

### P-3 🟠 Hero showreel is 1.06 MB served on every homepage visit.
`/tml-showreel.mp4` = 1,089,778 bytes. Consider:
- a poster image with "Play showreel" button that loads the MP4 only on
  click, or
- lazy-load via IntersectionObserver, or
- stream from YouTube (unlisted) instead of self-hosting.

### P-4 🟡 OG image is only 33 KB (`og-image.png`).
At 1200×630 that suggests heavy compression or small source. Generate a
fresh 1200×630 PNG (~150-300 KB) with brand colours, logo, and tagline.
Twitter & Slack previews currently look weak.

### P-5 🟡 Syne font is preloaded as `false` but referenced in CSS.
`layout.tsx` loads Inter (`preload: true`) and Syne (`preload: false`).
If Syne is used in H1s / H2s above the fold (likely, given the brand
aesthetic) this causes a FOIT/FOUT. Either preload Syne subset or switch
hero fonts to Inter.

### P-6 🟡 No `<link rel="preconnect">` to `fonts.gstatic.com`, `www.googletagmanager.com`, `www.clarity.ms`.
Add to layout head. Each saves 100-300ms DNS/TLS on first paint.

### P-7 🟡 No hero image preload.
Same issue previous audit flagged. Add:
```tsx
<link rel="preload" as="image" href="/hero-background.webp" fetchpriority="high" />
```

### P-8 🟡 Reels folder has 15 videos, several >1 MB, all self-hosted.
If these auto-play anywhere, they are compounding the perf problem.
Verify lazy-load intersection observer thresholds.

---

## 🟡 ACCESSIBILITY

### A-1 🟡 Accordion buttons (FAQ, mobile menu) often lack `aria-expanded` / `aria-controls`.
Partial support in `NavbarHome2.tsx`. Missing in `FAQHome2.tsx:146`,
`FAQSection.tsx:32`, `FooterHome2.tsx:241`. Screen readers can't tell
when a section is open.

### A-2 🟡 Testimonial carousel arrows in `TestimonialsHome2.tsx` lack aria-labels.
Four `<button>` tags at lines 179, 424, 438, 445 without aria-label.

### A-3 🟡 Skip-to-content link missing.
Keyboard users have to tab through the entire nav on every page load.
Add `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>`.

### A-4 🟡 Contrast likely fails AA in places.
Dark theme with `text-white/50` or `/70` on `#050505` background is
common in the codebase (I saw these classes in the error page, hero sub
text, footer). Run Lighthouse accessibility or axe-core.

### A-5 🟡 Alt text on work/portfolio images is templated.
Pattern: `` `${project.title} - ${project.category} project by TML Agency` ``.
Better: describe what is visually in the image ("Black-and-white
cinematic product shot of Luxe Interiors sofa with warm lighting").

### A-6 🟡 Videos have no captions track.
`tml-showreel.mp4` is hero — WCAG 2.1 AA requires captions for video
content. Add `.vtt` files.

### A-7 🟡 No `lang="en"` attribute check — verify `<html lang>`.
Confirm `layout.tsx` sets it; from my read it does, but also consider
`lang="en-IN"` to match hreflang.

---

## 🟡 SCHEMA / STRUCTURED DATA

### SC-1 🟡 `DEFAULT_PROVIDER` in `schema.ts` uses `twitter.com/tmlagency` in `sameAs`.
Twitter is now `x.com` — some Google entity-extraction pipelines treat
the old domain as dead. Use `https://x.com/tmlagency` as the canonical
and confirm the account exists; if `tmlagency` is not your handle, this
is a false entity signal.

### SC-2 🟡 `sameAs` only has 4 profiles.
Add YouTube, Behance, Dribbble, Clutch, GoodFirms, Crunchbase,
MediaInfoline if they exist. `sameAs` is the single strongest
disambiguation signal for the Organization knowledge panel.

### SC-3 🟡 No `founder` or `employee` arrays in Organization schema on most pages.
The homepage has them; inner pages don't because `generateLocalBusinessSchema`
doesn't include them. Refactor to include a minimal founder reference.

### SC-4 🟡 `openingHoursSpecification` ends "Sunday" — not declared.
The contact page says "Sunday: Closed"; the schema in `schema.ts` just
omits it. Explicitly declare: `{dayOfWeek: "Sunday", opens: "00:00",
closes: "00:00"}` or add `closed: true`.

### SC-5 🟡 `VideoObject` on homepage lacks `contentUrl` fallback.
Not verified on live — confirm via schema validator.

### SC-6 🟡 No Person schema for authors.
`authors.ts` has the data but nothing emits `@type: Person` JSON-LD on
the author pages or on blog posts' `author` field.

### SC-7 🟡 No Review schema for visible reviews on Chandigarh page.
The three written testimonials (Sarah Mitchell, James Carter, Harman)
are shown as text. Wrap each in a `Review` schema block with
`reviewRating`, `author`, `reviewBody`, `datePublished`.

---

## 🟡 CONTENT QUALITY

### C-1 🟡 Blog has 2025 and 2026 dates mixed.
Sample: "2025-03-20", "2025-03-21", "2026-03-24", "2026-03-24". Decide
whether you are backdating articles or actually publishing them; both
strategies have risk. Bulk dates in the same week signal batching.

### C-2 🟡 Blog posts use "I am going to let you in on a dirty secret" style opener repeatedly.
Samples grep'd include "dirty secret about the digital marketing industry",
"here is a secret: you do not always have to choose", "secret weapon",
"dirty secret of many agencies". Repetitive copywriting voice across 295
articles is an AI-generation tell.

### C-3 🟡 `data/comparisons.ts` and `techStack.ts` exist but I didn't see them promoted.
If they power pages, they are low-traffic. If unused, delete to reduce
bundle.

### C-4 🟡 Hindi/Hinglish blog passages exist: "Yeh feature bahut kam log use karte hain".
Found in `newBlogPosts.ts:3263`. If this is intentional for India
market, great — but confirm the page has `lang="hi"` or `hreflang` set,
otherwise Google may classify as spun content.

### C-5 🟡 FAQ answers < 80 words average.
Previous audit flagged this. AI Overviews cite ~130-170 word passages.
Expand the top 20 FAQs to 130-180 words each with direct-answer
openings.

---

## 🟢 DEVELOPER HYGIENE

### D-1 🟢 ESLint: 10 errors, 55 warnings.
Main audit covered the Math.random case; the others are unused imports
and one `any` type.

### D-2 🟢 `blogArticles.ts` = 14,369 lines = content-as-code anti-pattern.
Migrate to MDX + a content-layer.

### D-3 🟢 `2MEDIA` and `Media` folders at repo root.
Likely leftover asset folders. Add to `.gitignore` or move to `public/`.

### D-4 🟢 `download (2).mp4` at repo root.
Stray file — delete.

### D-5 🟢 `next-env.d.ts` and `tsconfig.tsbuildinfo` present — normal.
But `tsconfig.tsbuildinfo` should be gitignored.

### D-6 🟢 No CI, no tests, no lint-staged.
For a website with 1,800+ pages and schema-heavy SEO, the lack of any
automated guardrails is a risk. Minimum recommended setup:
- `husky` + `lint-staged` on pre-commit
- GitHub Actions running `npm run lint` and `npm run build`
- Lighthouse CI against a preview URL on every PR
- Schema validator in CI

### D-7 🟢 No `.nvmrc` or Node version pinned.
Different contributors may run different Node versions.

### D-8 🟢 No sitemap-index.
Next.js emits a single sitemap. At ~1,000-2,000 URLs this is fine, but
when you exceed 50k split into multiple sitemaps under `/sitemap.xml`
index.

### D-9 🟢 Dual data files: `blogArticles.ts`, `blogPosts.ts`, `newBlogPosts.ts`.
Likely duplicated or superseded content. Consolidate.

### D-10 🟢 Dual templates: `ServicePageTemplate.tsx` and `ChandigarhServiceTemplate.tsx`.
~75% shared logic. Refactor into a single template with props for
Chandigarh-specific sections.

### D-11 🟢 `cityServiceContent.ts` (4,201 lines) + `cityServiceAutoContent.ts` (1,616 lines) + `sectionVariants.ts` (600 lines).
Overlapping content systems. Document which one wins or collapse to one.

### D-12 🟢 Console.log in production error boundary is gated by NODE_ENV, so OK.
Good defensive code in `error.tsx`.

---

## 🟢 SECURITY

### SEC-1 🟢 CSP is `Content-Security-Policy-Report-Only`.
Good for monitoring; upgrade to enforced CSP once the report endpoint is
clean. Add a `report-uri` to actually collect violations.

### SEC-2 🟢 No `honeypot` or `hcaptcha` on contact form.
Once S-1 is fixed and emails start flowing, you will get spam. Add a
honeypot field or hCaptcha/Cloudflare Turnstile.

### SEC-3 🟢 Rate limiter is in-memory.
`submissions` Map in `route.ts:4` resets on every cold start / every
serverless instance. Real limit is effectively unlimited on Vercel.
Move to Upstash / Redis or Vercel KV.

### SEC-4 🟢 Form does not return a CSRF token.
Low risk (stateless JSON API), but if the form ever becomes a session
action you'll need one.

---

## 🟢 BUSINESS / GROWTH

### B-1 🟢 No Calendly on the global header.
Present on Chandigarh page only. If it works for you there, promote it
site-wide.

### B-2 🟢 No live chat or WhatsApp float (wait — there is `WhatsAppFloat.tsx`).
Confirm it is mounted globally and the number is production.

### B-3 🟢 No retargeting pixel setup that I saw.
You have GA4 + Clarity. Add Meta Pixel, LinkedIn Insight Tag, Google Ads
Tag — essential for a marketing agency's own funnel.

### B-4 🟢 No free-tools UX polish.
`/free-tools/` exists but not promoted in nav. Free tools are the best
link-bait for an SEO agency. Promote them and add one canonical
original tool that earns links (e.g. an AI-readiness scorer for brands).

### B-5 🟢 No content upgrade / lead magnet on blog posts.
Add a "Get the PDF checklist" above-the-fold offer on top-performing
blog posts to convert organic traffic.

### B-6 🟢 No LinkedIn / Twitter sharing buttons on blog.
Minor, but cheap to add.

---

## Prioritised do-this-week list

| # | Task | Category | Effort |
|---|------|----------|--------|
| 1 | Wire contact form to Resend/SendGrid + CRM/Zapier (S-1) | Revenue | 2 hrs |
| 2 | Wire newsletter to Mailchimp/ConvertKit (S-2) | Growth | 1 hr |
| 3 | Fix `shouldNoindex()` to actually return true for thin pages (S-3) | SEO | 30 min |
| 4 | Replace fabricated case studies with real ones (S-4) | Trust | 1 day |
| 5 | Global find-replace internal links to add trailing slashes (S-5) | SEO | 1 hr |
| 6 | Confirm `google-service-account.json` not tracked, rotate if so (S-6) | Security | 30 min |
| 7 | Server-side blog pagination (S-7) | SEO | 2 hrs |
| 8 | Delete `.bak` files and stray `download (2).mp4` (P-1, D-4) | Hygiene | 5 min |
| 9 | Add real founder photos to author pages (H-3) | Trust | 1 day |
| 10 | Align founder titles across authors.ts, layout.tsx, about page, LinkedIn (H-2) | E-E-A-T | 30 min |
| 11 | Pick one primary CTA phrase + global replace (H-6) | UX | 1 hr |
| 12 | Rewrite homepage H1/H2 with keyword-led phrasing (H-7) | SEO | 30 min |
| 13 | Add honeypot/Turnstile to contact form (SEC-2) | Security | 30 min |
| 14 | Move rate limiter to Vercel KV/Upstash (SEC-3) | Security | 1 hr |
| 15 | Run Lighthouse accessibility + fix AA contrast (A-4) | UX | 2 hrs |

---

*Audit is best-effort from code + live site. Before shipping fixes, reproduce
each issue locally, write a one-line test or a before/after Lighthouse
screenshot, and capture it in your PR description. That discipline is the
difference between "website we keep patching" and "website Google trusts."*
