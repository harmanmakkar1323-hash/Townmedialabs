import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Umm Al Quwain",
  description: "Top-rated AI Influencer Management company in Umm Al Quwain. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
  keywords: ["ai influencer management umm al quwain", "ai influencer management agency umm al quwain", "ai influencer management company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Umm Al Quwain",
    description: "Top-rated AI Influencer Management company in Umm Al Quwain. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Umm Al Quwain",
    description: "Top-rated AI Influencer Management company in Umm Al Quwain. TML offers expert AI Influencer Management services for 500+ businesses. Get a free AI Influencer Management consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
