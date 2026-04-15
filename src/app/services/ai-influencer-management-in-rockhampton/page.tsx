import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Rockhampton",
  description: "Top-rated AI Influencer Management company in Rockhampton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management rockhampton", "ai influencer management agency rockhampton", "ai influencer management company rockhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-rockhampton",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Rockhampton",
    description: "Top-rated AI Influencer Management company in Rockhampton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-rockhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Rockhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Rockhampton",
    description: "Top-rated AI Influencer Management company in Rockhampton. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInRockhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
