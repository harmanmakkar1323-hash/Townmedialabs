import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in San Francisco",
  description: "Top-rated AI Influencer Management company in San Francisco. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management san francisco", "ai influencer management agency san francisco", "ai influencer management company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-san-francisco",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in San Francisco",
    description: "Top-rated AI Influencer Management company in San Francisco. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in San Francisco",
    description: "Top-rated AI Influencer Management company in San Francisco. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSanFranciscoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
