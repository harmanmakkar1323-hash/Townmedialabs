import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Indianapolis",
  description: "Top-rated AI Influencer Management company in Indianapolis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management indianapolis", "ai influencer management agency indianapolis", "ai influencer management company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-indianapolis",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Indianapolis",
    description: "Top-rated AI Influencer Management company in Indianapolis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Indianapolis",
    description: "Top-rated AI Influencer Management company in Indianapolis. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
