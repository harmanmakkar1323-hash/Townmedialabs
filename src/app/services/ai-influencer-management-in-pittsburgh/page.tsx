import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Pittsburgh",
  description: "Top-rated AI Influencer Management company in Pittsburgh. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management pittsburgh", "ai influencer management agency pittsburgh", "ai influencer management company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-pittsburgh",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Pittsburgh",
    description: "Top-rated AI Influencer Management company in Pittsburgh. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Pittsburgh",
    description: "Top-rated AI Influencer Management company in Pittsburgh. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
