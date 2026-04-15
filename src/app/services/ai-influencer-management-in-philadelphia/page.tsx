import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Philadelphia",
  description: "Top-rated AI Influencer Management company in Philadelphia. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management philadelphia", "ai influencer management agency philadelphia", "ai influencer management company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-philadelphia",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Philadelphia",
    description: "Top-rated AI Influencer Management company in Philadelphia. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Philadelphia",
    description: "Top-rated AI Influencer Management company in Philadelphia. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
