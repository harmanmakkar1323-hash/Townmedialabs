import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Gold Coast",
  description: "Top-rated AI Influencer Management company in Gold Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management gold coast", "ai influencer management agency gold coast", "ai influencer management company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-gold-coast",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Gold Coast",
    description: "Top-rated AI Influencer Management company in Gold Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Gold Coast",
    description: "Top-rated AI Influencer Management company in Gold Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
