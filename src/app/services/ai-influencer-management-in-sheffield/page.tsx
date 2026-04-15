import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sheffield",
  description: "Top-rated AI Influencer Management company in Sheffield. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management sheffield", "ai influencer management agency sheffield", "ai influencer management company sheffield"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sheffield",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Sheffield",
    description: "Top-rated AI Influencer Management company in Sheffield. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sheffield",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sheffield" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Sheffield",
    description: "Top-rated AI Influencer Management company in Sheffield. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSheffieldPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
