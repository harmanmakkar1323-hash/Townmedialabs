import type { Metadata } from "next";
import ChandigarhPageClient from "./ChandigarhPageClient";
import { servicePages } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Chandigarh",
  description:
    "TML is the top digital marketing company in Chandigarh. Our agency offers SEO, branding, Google Ads, social media & web development services. 500+ brands, 15+ years.",
  keywords: [
    "best digital marketing agency chandigarh",
    "digital marketing company chandigarh",
    "digital marketing services chandigarh",
    "top digital marketing agency chandigarh",
    "seo company chandigarh",
    "branding agency chandigarh",
    "social media marketing chandigarh",
    "google ads chandigarh",
    "web development chandigarh",
  ],
  openGraph: {
    title: "Best Digital Marketing Agency in Chandigarh",
    description:
      "TML is the top digital marketing company in Chandigarh. Our agency offers SEO, branding, Google Ads, social media & web development services. 500+ brands, 15+ years.",
    url: "https://townmedialabs.com/digital-marketing-agency-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Marketing Agency in Chandigarh - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Digital Marketing Agency in Chandigarh",
    description:
      "TML is the top digital marketing company in Chandigarh. Our agency offers SEO, branding, Google Ads, social media & web development services. 500+ brands, 15+ years.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/digital-marketing-agency-chandigarh/",
  },
};

const topServiceSlugs = [
  "branding", "seo", "google-ads", "website-development",
  "social-media", "lead-generation", "graphic-design", "video-editing",
];

export default function ChandigarhPage() {
  const serviceMap: Record<string, { slug: string; title: string; description: string }> = {};
  for (const slug of topServiceSlugs) {
    const s = servicePages[slug];
    if (s) {
      serviceMap[slug] = { slug: s.slug, title: s.title, description: s.description };
    }
  }

  return <ChandigarhPageClient serviceMap={serviceMap} />;
}
