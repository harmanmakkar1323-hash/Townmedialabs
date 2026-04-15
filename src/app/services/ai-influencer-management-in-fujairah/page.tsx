import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Fujairah",
  description: "Top-rated AI Influencer Management company in Fujairah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management fujairah", "ai influencer management agency fujairah", "ai influencer management company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-fujairah",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Fujairah",
    description: "Top-rated AI Influencer Management company in Fujairah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Fujairah",
    description: "Top-rated AI Influencer Management company in Fujairah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
