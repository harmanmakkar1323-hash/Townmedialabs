import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bhopal",
  description: "Top-rated AI Influencer Management company in Bhopal. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["AI influencer management bhopal", "AI influencer management agency bhopal", "AI influencer management company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-bhopal",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Bhopal",
    description: "Top-rated AI Influencer Management company in Bhopal. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Bhopal",
    description: "Top-rated AI Influencer Management company in Bhopal. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
