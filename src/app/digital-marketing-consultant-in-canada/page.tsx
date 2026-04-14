import type { Metadata } from "next";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Digital Marketing Consultant in Canada",
  description:
    "TML Agency is a trusted digital marketing consultant in Canada. SEO, Google Ads, branding & web development for Canadian businesses. Offices in Edmonton. Free consultation.",
  keywords: [
    "digital marketing consultant canada",
    "digital marketing agency canada",
    "seo consultant canada",
    "google ads consultant canada",
    "digital marketing edmonton",
    "marketing agency canada",
    "ppc consultant canada",
  ],
  alternates: { canonical: `${siteUrl}/digital-marketing-consultant-in-canada/` },
  openGraph: {
    title: "Digital Marketing Consultant in Canada — TML Agency",
    description: "Trusted digital marketing consultant for Canadian businesses. SEO, Google Ads, branding & web development. Edmonton-based, serving all of Canada.",
    url: `${siteUrl}/digital-marketing-consultant-in-canada/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Marketing Consultant in Canada" }],
  },
};

const services = [
  { title: "SEO Services", desc: "Rank higher on Google.ca with data-driven SEO strategies built for the Canadian market.", href: "/services/seo/" },
  { title: "Google Ads Management", desc: "Maximize your ad spend with expertly managed Google Ads campaigns targeting Canadian customers.", href: "/services/google-ads/" },
  { title: "Website Development", desc: "Fast, modern, conversion-ready websites built with the latest technology.", href: "/services/website-development/" },
  { title: "Social Media Marketing", desc: "Build your brand presence on Instagram, LinkedIn, Facebook, and TikTok across Canada.", href: "/services/social-media/" },
  { title: "Branding & Identity", desc: "Create a memorable brand that resonates with Canadian consumers.", href: "/services/branding/" },
  { title: "Lead Generation", desc: "Fill your pipeline with qualified Canadian leads through multi-channel campaigns.", href: "/services/lead-generation/" },
];

const cities = [
  { name: "Edmonton", href: "/services/seo-in-edmonton/" },
  { name: "Calgary", href: "/services/seo-in-calgary/" },
  { name: "Toronto", href: "/services/seo-in-toronto/" },
  { name: "Vancouver", href: "/services/seo-in-vancouver/" },
  { name: "Abbotsford", href: "/services/seo-in-abbotsford/" },
  { name: "Airdrie", href: "/services/seo-in-airdrie/" },
];

export default function DigitalMarketingConsultantCanada() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Digital Marketing Consultant in Canada", href: "/digital-marketing-consultant-in-canada/" },
          ]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mt-8 mb-6">
            Digital Marketing Consultant in Canada<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
            TML Agency helps Canadian businesses grow with SEO, Google Ads, branding, and web development. Based in Edmonton, serving clients across all of Canada.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get a Free Consultation
            </Link>
            <Link href="/portfolio/" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why TML for Canada */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase mb-4">Why Canadian Businesses Choose TML</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            Your Digital Marketing Partner in Canada<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-lg font-semibold mb-3">Edmonton Headquarters</h3>
              <p className="text-sm text-white/70 leading-relaxed">Our Canadian office is based in Edmonton, Alberta. We understand the Canadian market, bilingual search behaviour, and local competition dynamics.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-lg font-semibold mb-3">500+ Brands Served</h3>
              <p className="text-sm text-white/70 leading-relaxed">From startups in Calgary to enterprises in Toronto — we have delivered results for businesses across every major Canadian city and industry.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-lg font-semibold mb-3">Full-Service Agency</h3>
              <p className="text-sm text-white/70 leading-relaxed">SEO, Google Ads, social media, branding, web development, and lead generation. Everything under one roof. No freelancer handoffs.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-lg font-semibold mb-3">Transparent Reporting</h3>
              <p className="text-sm text-white/70 leading-relaxed">Clear ROI tracking. Regular performance reviews. You always know exactly how your marketing investment is performing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase mb-4">Digital Marketing Services in Canada</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            Services We Offer for Canadian Businesses<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#ff4500] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8">
            Serving Businesses Across Canada<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link key={c.name} href={c.href} className="px-5 py-2.5 rounded-full border border-white/[0.08] text-sm hover:border-[#ff4500]/40 hover:bg-[#ff4500]/10 transition-all">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Ready to Grow Your Canadian Business<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">Get a free digital marketing consultation. No obligation. Just honest advice on how to grow.</p>
          <Link href="/contact/" className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
