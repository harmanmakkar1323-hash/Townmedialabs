import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Hamilton",
  description: "Top-rated AI Influencer Management company in Hamilton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management hamilton", "ai influencer management agency hamilton", "ai influencer management hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-hamilton",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Hamilton",
    description: "Top-rated AI Influencer Management company in Hamilton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Hamilton",
    description: "Top-rated AI Influencer Management company in Hamilton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
