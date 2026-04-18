import type { Metadata } from "next";
import FreeToolsIndexClient from "./FreeToolsIndexClient";

export const metadata: Metadata = {
  title: "Free Marketing Tools & Calculators",
  description:
    "Free SEO audit checklist, website speed test, social post generator, Google Ads budget planner, ROI calculator and meta tag generator. No signup — just use them.",
  keywords: [
    "free marketing tools",
    "SEO audit checklist",
    "website speed calculator",
    "social media post generator",
    "Google Ads budget calculator",
    "ROI calculator",
    "meta tag generator",
    "free SEO tools",
    "digital marketing calculators",
  ],
  openGraph: {
    title: "Free Marketing Tools & Calculators",
    description:
      "Free tools to audit SEO, plan ad budgets, measure ROI, generate meta tags and more. No signup required — just open and use.",
    url: "https://townmedialabs.com/free-tools/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Marketing Tools - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Free Marketing Tools & Calculators",
    description:
      "Free tools to audit SEO, plan ad budgets, measure ROI, generate meta tags and more. No signup required — just open and use.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.com/free-tools/",
  },
};

export default function FreeToolsPage() {
  return <FreeToolsIndexClient />;
}
