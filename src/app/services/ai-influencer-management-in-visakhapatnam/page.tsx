import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Visakhapatnam",
  description: "Top-rated AI Influencer Management company in Visakhapatnam. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["AI influencer management visakhapatnam", "AI influencer management agency visakhapatnam", "AI influencer management company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-visakhapatnam",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Visakhapatnam",
    description: "Top-rated AI Influencer Management company in Visakhapatnam. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Visakhapatnam",
    description: "Top-rated AI Influencer Management company in Visakhapatnam. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
