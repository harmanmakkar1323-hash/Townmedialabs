import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dunedin",
  description: "Top-rated AI Influencer Management company in Dunedin. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management dunedin", "ai influencer management agency dunedin", "ai influencer management dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-dunedin",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Dunedin",
    description: "Top-rated AI Influencer Management company in Dunedin. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Dunedin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Dunedin",
    description: "Top-rated AI Influencer Management company in Dunedin. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInDunedinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
