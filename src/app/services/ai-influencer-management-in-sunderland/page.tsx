import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sunderland",
  description: "Top-rated AI Influencer Management company in Sunderland. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management sunderland", "ai influencer management agency sunderland", "ai influencer management company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sunderland",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Sunderland",
    description: "Top-rated AI Influencer Management company in Sunderland. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sunderland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Sunderland",
    description: "Top-rated AI Influencer Management company in Sunderland. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSunderlandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
