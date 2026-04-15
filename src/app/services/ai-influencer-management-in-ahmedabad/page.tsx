import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ahmedabad",
  description: "Top-rated AI Influencer Management company in Ahmedabad. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["AI influencer management ahmedabad", "AI influencer management agency ahmedabad", "AI influencer management company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ahmedabad",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Ahmedabad",
    description: "Top-rated AI Influencer Management company in Ahmedabad. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Ahmedabad",
    description: "Top-rated AI Influencer Management company in Ahmedabad. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
