import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in St. Louis",
  description: "Top-rated AI Influencer Management company in St. Louis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management st. louis", "ai influencer management agency st. louis", "ai influencer management company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-st-louis",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in St. Louis",
    description: "Top-rated AI Influencer Management company in St. Louis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in St. Louis",
    description: "Top-rated AI Influencer Management company in St. Louis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
