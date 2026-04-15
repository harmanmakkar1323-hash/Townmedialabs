import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Canberra",
  description: "Top-rated AI Influencer Management company in Canberra. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management canberra", "ai influencer management agency canberra", "ai influencer management company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-canberra",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Canberra",
    description: "Top-rated AI Influencer Management company in Canberra. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Canberra",
    description: "Top-rated AI Influencer Management company in Canberra. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
