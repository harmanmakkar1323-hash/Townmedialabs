import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Salt Lake City",
  description: "Top-rated AI Influencer Management company in Salt Lake City. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management salt lake city", "ai influencer management agency salt lake city", "ai influencer management company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-salt-lake-city",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Salt Lake City",
    description: "Top-rated AI Influencer Management company in Salt Lake City. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Salt Lake City",
    description: "Top-rated AI Influencer Management company in Salt Lake City. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
