import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ras Al Khaimah",
  description: "Top-rated AI Influencer Management company in Ras Al Khaimah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management ras al khaimah", "ai influencer management agency ras al khaimah", "ai influencer management company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Ras Al Khaimah",
    description: "Top-rated AI Influencer Management company in Ras Al Khaimah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Ras Al Khaimah",
    description: "Top-rated AI Influencer Management company in Ras Al Khaimah. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
