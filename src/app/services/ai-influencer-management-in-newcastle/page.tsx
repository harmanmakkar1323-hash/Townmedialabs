import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Newcastle",
  description: "Top-rated AI Influencer Management company in Newcastle. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management newcastle", "ai influencer management agency newcastle", "ai influencer management company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-newcastle",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Newcastle",
    description: "Top-rated AI Influencer Management company in Newcastle. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-newcastle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Newcastle",
    description: "Top-rated AI Influencer Management company in Newcastle. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInNewcastlePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
