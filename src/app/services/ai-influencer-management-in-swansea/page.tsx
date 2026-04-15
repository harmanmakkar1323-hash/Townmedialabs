import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Swansea",
  description: "Top-rated AI Influencer Management company in Swansea. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management swansea", "ai influencer management agency swansea", "ai influencer management company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-swansea",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Swansea",
    description: "Top-rated AI Influencer Management company in Swansea. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Swansea",
    description: "Top-rated AI Influencer Management company in Swansea. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
