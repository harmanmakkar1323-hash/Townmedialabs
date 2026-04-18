import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in South Delhi",
  description: "Top-rated AI Influencer Management company in South Delhi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["AI influencer management south delhi", "AI influencer management agency south delhi", "AI influencer management company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-south-delhi",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in South Delhi",
    description: "Top-rated AI Influencer Management company in South Delhi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in South Delhi",
    description: "Top-rated AI Influencer Management company in South Delhi. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
