import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Brisbane",
  description: "Top-rated AI Influencer Management company in Brisbane. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management brisbane", "ai influencer management agency brisbane", "ai influencer management company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-brisbane",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Brisbane",
    description: "Top-rated AI Influencer Management company in Brisbane. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Brisbane",
    description: "Top-rated AI Influencer Management company in Brisbane. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
