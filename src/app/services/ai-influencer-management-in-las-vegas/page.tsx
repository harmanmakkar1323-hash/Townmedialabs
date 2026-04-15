import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Las Vegas",
  description: "Top-rated AI Influencer Management company in Las Vegas. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management las vegas", "ai influencer management agency las vegas", "ai influencer management company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-las-vegas",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Las Vegas",
    description: "Top-rated AI Influencer Management company in Las Vegas. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Las Vegas",
    description: "Top-rated AI Influencer Management company in Las Vegas. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
