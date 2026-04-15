import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Phoenix",
  description: "Top-rated AI Influencer Management company in Phoenix. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management phoenix", "ai influencer management agency phoenix", "ai influencer management company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-phoenix",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Phoenix",
    description: "Top-rated AI Influencer Management company in Phoenix. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Phoenix" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Phoenix",
    description: "Top-rated AI Influencer Management company in Phoenix. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInPhoenixPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
