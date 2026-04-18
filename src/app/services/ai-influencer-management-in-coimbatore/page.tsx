import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Coimbatore",
  description: "Top-rated AI Influencer Management company in Coimbatore. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["AI influencer management coimbatore", "AI influencer management agency coimbatore", "AI influencer management company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-coimbatore",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Coimbatore",
    description: "Top-rated AI Influencer Management company in Coimbatore. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Coimbatore",
    description: "Top-rated AI Influencer Management company in Coimbatore. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
