import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Queenstown",
  description: "Top-rated AI Influencer Management company in Queenstown. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management queenstown", "ai influencer management agency queenstown", "ai influencer management queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-queenstown",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Queenstown",
    description: "Top-rated AI Influencer Management company in Queenstown. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Queenstown" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Queenstown",
    description: "Top-rated AI Influencer Management company in Queenstown. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInQueenstownPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
