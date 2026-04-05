import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Liverpool",
  description: "TML offers expert AI Influencer Management services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management liverpool", "ai influencer management agency liverpool", "ai influencer management company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-liverpool",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Liverpool",
    description: "TML offers expert AI Influencer Management services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Liverpool",
    description: "TML offers expert AI Influencer Management services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
