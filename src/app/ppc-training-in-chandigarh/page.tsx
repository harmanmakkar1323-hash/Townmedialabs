import type { Metadata } from "next";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "PPC Training in Chandigarh",
  description:
    "Learn PPC & Google Ads from experts at TML Agency, Chandigarh. Hands-on training covering Search, Display, Shopping, and Performance Max campaigns. Enroll today.",
  keywords: [
    "ppc training chandigarh",
    "google ads training chandigarh",
    "google ads course chandigarh",
    "ppc course chandigarh",
    "digital marketing training chandigarh",
    "google ads certification chandigarh",
  ],
  alternates: { canonical: `${siteUrl}/ppc-training-in-chandigarh/` },
  openGraph: {
    title: "PPC Training in Chandigarh — Learn Google Ads from Experts",
    description: "Hands-on PPC & Google Ads training in Chandigarh by TML Agency. Learn Search, Display, Shopping, and Performance Max campaigns.",
    url: `${siteUrl}/ppc-training-in-chandigarh/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PPC Training in Chandigarh" }],
  },
};

const modules = [
  { num: "01", title: "Google Ads Fundamentals", desc: "Account setup, campaign types, bidding strategies, and how the Google Ads auction works." },
  { num: "02", title: "Keyword Research & Match Types", desc: "Finding profitable keywords, understanding match types, and building negative keyword lists." },
  { num: "03", title: "Search Campaign Mastery", desc: "Writing high-CTR ad copy, extensions, responsive search ads, and A/B testing strategies." },
  { num: "04", title: "Display & Video Campaigns", desc: "Banner ads, YouTube ads, audience targeting, remarketing lists, and creative best practices." },
  { num: "05", title: "Shopping & Performance Max", desc: "Product feed optimization, Merchant Center setup, and AI-powered Performance Max campaigns." },
  { num: "06", title: "Analytics & Conversion Tracking", desc: "Google Analytics 4, conversion tracking, attribution models, and reporting dashboards." },
  { num: "07", title: "Campaign Optimization", desc: "Quality Score improvement, bid adjustments, budget allocation, and scaling profitable campaigns." },
  { num: "08", title: "Live Campaign Project", desc: "Build and launch a real Google Ads campaign with expert guidance. Real budget, real results." },
];

export default function PPCTrainingChandigarh() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "PPC Training in Chandigarh", href: "/ppc-training-in-chandigarh/" },
          ]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mt-8 mb-6">
            PPC Training in Chandigarh<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-4">
            Learn Google Ads & PPC from the team that manages ad spend for 500+ brands. Hands-on training at TML Agency, Chandigarh.
          </p>
          <p className="text-sm text-white/50 mb-8">Suitable for beginners, marketers, and business owners who want to run profitable ad campaigns.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Enquire About Training
            </Link>
            <Link href="/services/google-ads/" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              Our Google Ads Services
            </Link>
          </div>
        </div>
      </section>

      {/* What You Learn */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase mb-4">PPC Training Curriculum</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            What You Will Learn in Our PPC Course<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.map((m) => (
              <div key={m.num} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all">
                <span className="text-xs font-mono text-[#ff4500]/50 font-bold">{m.num}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{m.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TML */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            Why Learn PPC from TML Agency<span className="text-[#ff4500]">?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-[#ff4500] mb-2">500+</div>
              <p className="text-sm text-white/70">Brands managed on Google Ads</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-[#ff4500] mb-2">70+</div>
              <p className="text-sm text-white/70">In-house team of experts</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-[#ff4500] mb-2">100%</div>
              <p className="text-sm text-white/70">Hands-on practical training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Ready to Master Google Ads<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">Enroll in our PPC training programme in Chandigarh. Limited seats per batch for personalized attention.</p>
          <Link href="/contact/" className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
            Enquire Now
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
