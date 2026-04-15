import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sacramento",
  description: "Top-rated AI Influencer Management company in Sacramento. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management sacramento", "ai influencer management agency sacramento", "ai influencer management company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sacramento",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Sacramento",
    description: "Top-rated AI Influencer Management company in Sacramento. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sacramento" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Sacramento",
    description: "Top-rated AI Influencer Management company in Sacramento. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSacramentoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
