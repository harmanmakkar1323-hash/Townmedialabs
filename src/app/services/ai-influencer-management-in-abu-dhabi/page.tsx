import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Abu Dhabi",
  description: "Top-rated AI Influencer Management company in Abu Dhabi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management abu dhabi", "ai influencer management agency abu dhabi", "ai influencer management company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-abu-dhabi",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Abu Dhabi",
    description: "Top-rated AI Influencer Management company in Abu Dhabi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Abu Dhabi",
    description: "Top-rated AI Influencer Management company in Abu Dhabi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
