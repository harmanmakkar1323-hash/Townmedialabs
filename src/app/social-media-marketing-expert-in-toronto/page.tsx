import type { Metadata } from "next";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Social Media Marketing Expert in Toronto",
  description:
    "TML is a social media marketing expert in Toronto. Instagram, Facebook, LinkedIn & TikTok management for Toronto businesses. Grow your brand online. Free consultation.",
  keywords: [
    "social media marketing toronto",
    "social media expert toronto",
    "social media agency toronto",
    "instagram marketing toronto",
    "social media management toronto",
    "digital marketing toronto",
  ],
  alternates: { canonical: `${siteUrl}/social-media-marketing-expert-in-toronto/` },
  openGraph: {
    title: "Social Media Marketing Expert in Toronto — TML Agency",
    description: "Expert social media marketing for Toronto businesses. Instagram, Facebook, LinkedIn & TikTok. Grow your brand. Free consultation.",
    url: `${siteUrl}/social-media-marketing-expert-in-toronto/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Social Media Marketing Expert in Toronto" }],
  },
};

const platforms = [
  { name: "Instagram", desc: "Content strategy, Reels, Stories, and growth campaigns that build engaged followers and drive sales." },
  { name: "Facebook", desc: "Page management, community building, Facebook Ads, and lead generation campaigns for Toronto businesses." },
  { name: "LinkedIn", desc: "B2B thought leadership, company page optimization, and LinkedIn Ads for Toronto professionals." },
  { name: "TikTok", desc: "Short-form video strategy, trending content creation, and TikTok Ads for brand awareness." },
  { name: "YouTube", desc: "Video content strategy, SEO optimization, and YouTube Ads for long-form brand storytelling." },
  { name: "X (Twitter)", desc: "Real-time engagement, brand voice development, and community management." },
];

export default function SocialMediaMarketingToronto() {
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
            { label: "Social Media Marketing in Toronto", href: "/social-media-marketing-expert-in-toronto/" },
          ]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mt-8 mb-6">
            Social Media Marketing Expert in Toronto<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
            Grow your Toronto business on Instagram, Facebook, LinkedIn, and TikTok. TML manages social media for 500+ brands with real, measurable results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get a Free Social Media Audit
            </Link>
            <Link href="/services/social-media/" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              Our Social Media Services
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase mb-4">Social Media Platforms We Manage</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            Every Platform Your Toronto Business Needs<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all">
                <h3 className="text-lg font-semibold mb-3">{p.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
            What Our Toronto Social Media Service Includes<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Content Calendar & Strategy", desc: "Monthly content plans aligned with Toronto events, seasons, and your business goals." },
              { title: "Creative Content Production", desc: "Graphics, Reels, carousels, and videos designed to stop the scroll and engage your audience." },
              { title: "Community Management", desc: "Daily engagement, comment responses, and DM management to build relationships with followers." },
              { title: "Paid Social Campaigns", desc: "Facebook Ads, Instagram Ads, and LinkedIn Ads targeted at Toronto demographics for maximum ROI." },
              { title: "Influencer Partnerships", desc: "Connect with Toronto influencers and micro-creators who align with your brand values." },
              { title: "Monthly Analytics & Reporting", desc: "Clear reports showing growth, engagement, reach, and ROI. No vanity metrics." },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Ready to Grow on Social Media in Toronto<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">Get a free social media audit. We will show you what is working, what is not, and how to grow faster.</p>
          <Link href="/contact/" className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
