import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Charlotte",
  description: "Top-rated AI Influencer Management company in Charlotte. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management charlotte", "ai influencer management agency charlotte", "ai influencer management company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-charlotte",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Charlotte",
    description: "Top-rated AI Influencer Management company in Charlotte. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Charlotte" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Charlotte",
    description: "Top-rated AI Influencer Management company in Charlotte. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInCharlottePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
