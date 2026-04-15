import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sunshine Coast",
  description: "Top-rated AI Influencer Management company in Sunshine Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management sunshine coast", "ai influencer management agency sunshine coast", "ai influencer management company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sunshine-coast",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Sunshine Coast",
    description: "Top-rated AI Influencer Management company in Sunshine Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Sunshine Coast",
    description: "Top-rated AI Influencer Management company in Sunshine Coast. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
