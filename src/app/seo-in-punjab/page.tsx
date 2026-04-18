import type { Metadata } from "next";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "SEO Agency in Punjab — #1 Ranked SEO Company",
  description:
    "TML is the top-rated SEO agency in Punjab. We help businesses in Chandigarh, Mohali, Ludhiana, Amritsar, Jalandhar & Patiala rank on Google. 500+ brands served.",
  keywords: [
    "seo in punjab",
    "seo company punjab",
    "seo agency punjab",
    "seo services punjab",
    "best seo company in punjab",
    "seo chandigarh",
    "seo mohali",
    "seo ludhiana",
  ],
  alternates: { canonical: `${siteUrl}/seo-in-punjab/` },
  openGraph: {
    title: "SEO Agency in Punjab — #1 Ranked SEO Company",
    description: "Top-rated SEO agency in Punjab. Serving Chandigarh, Mohali, Ludhiana, Amritsar, Jalandhar & Patiala. 500+ brands. Free SEO audit.",
    url: `${siteUrl}/seo-in-punjab/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SEO Agency in Punjab" }],
  },
};

const punjabCities = [
  { name: "Chandigarh", href: "/services/seo-in-chandigarh/" },
  { name: "Mohali", href: "/services/seo-in-mohali/" },
  { name: "Ludhiana", href: "/services/seo-in-ludhiana/" },
  { name: "Amritsar", href: "/services/seo-in-amritsar/" },
  { name: "Jalandhar", href: "/services/seo-in-jalandhar/" },
  { name: "Patiala", href: "/services/seo-in-patiala/" },
  { name: "Bathinda", href: "/services/seo-in-bathinda/" },
  { name: "Punjab (all cities)", href: "/services/seo-in-punjab/" },
];

const seoServices = [
  { title: "Technical SEO Audits", desc: "Site speed, Core Web Vitals, crawlability, mobile-first indexing, and schema markup." },
  { title: "On-Page SEO", desc: "Keyword optimization, meta tags, content structure, and internal linking for every page." },
  { title: "Local SEO & Google Maps", desc: "Google Business Profile optimization, local citations, reviews, and map pack rankings." },
  { title: "Content Strategy", desc: "Keyword research, topic clusters, blog strategy, and pillar content that ranks." },
  { title: "Link Building", desc: "High-quality backlinks from authoritative Indian and global domains." },
  { title: "E-Commerce SEO", desc: "Product page optimization, category structure, and schema for online stores." },
];

export default function SEOInPunjab() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: "SEO in Punjab", href: "/seo-in-punjab/" },
          ]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mt-8 mb-6">
            SEO Agency in Punjab<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
            Punjab&apos;s top-rated SEO company. We help businesses in Chandigarh, Mohali, Ludhiana, Amritsar, and across Punjab rank on the first page of Google.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get a Free SEO Audit
            </Link>
            <Link href="/services/seo/" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              Our SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase mb-4">SEO Services for Punjab Businesses</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            What Our Punjab SEO Services Include<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {seoServices.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all">
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8">
            SEO Services Across Punjab Cities<span className="text-[#ff4500]">.</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">We serve businesses in every major Punjab city. Click a city to see location-specific SEO strategies.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {punjabCities.map((c) => (
              <Link key={c.name} href={c.href} className="px-5 py-2.5 rounded-full border border-white/[0.08] text-sm hover:border-[#ff4500]/40 hover:bg-[#ff4500]/10 transition-all">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            SEO Results for Punjab Businesses<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "500+", label: "Brands served" },
              { stat: "10,000+", label: "Keywords ranked" },
              { stat: "3x", label: "Average traffic growth" },
              { stat: "4.9/5", label: "Google rating" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ff4500] mb-2">{s.stat}</div>
                <p className="text-xs text-white/60 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Ready to Rank on Google in Punjab<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">Get a free SEO audit of your website. We will show you exactly what is holding you back and how to fix it.</p>
          <Link href="/contact/" className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
            Get Your Free SEO Audit
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
