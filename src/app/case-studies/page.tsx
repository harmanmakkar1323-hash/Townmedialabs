import type { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "Case Studies — Real Client Results",
  description:
    "See TML Agency case studies: 300% more patient bookings, 10x organic traffic growth, and more. Real digital marketing results across industries. Read the stories.",
  keywords: [
    "digital marketing case studies",
    "marketing portfolio",
    "SEO case studies",
    "Google Ads results",
    "social media marketing results",
    "TML Agency portfolio",
    "marketing ROI examples",
  ],
  openGraph: {
    title: "Case Studies — Real Client Results",
    description:
      "Real results for real businesses. Explore TML Agency's successful digital marketing campaigns across industries and see what's possible.",
    url: "https://townmedialabs.com/case-studies/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TML Agency Case Studies & Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Case Studies — Real Client Results",
    description:
      "Real results for real businesses. Explore TML Agency's successful digital marketing campaigns across industries and see what's possible.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.com/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesIndexClient />;
}
