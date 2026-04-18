import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Chandigarh",
  description: "Top-rated ai influencer management company in Chandigarh. TML offers expert ai influencer management services for 500+ businesses across Punjab. Get a free ai influencer management consultation today.",
  keywords: ["best ai influencer management agency chandigarh", "ai influencer management company chandigarh", "ai influencer management services chandigarh", "best ai influencer management chandigarh", "top ai influencer management agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-chandigarh/",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Chandigarh",
    description: "Top-rated ai influencer management company in Chandigarh. TML offers expert ai influencer management services for 500+ businesses across Punjab. Get a free ai influencer management consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Chandigarh",
    description: "Top-rated ai influencer management company in Chandigarh. TML offers expert ai influencer management services for 500+ businesses across Punjab. Get a free ai influencer management consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UaiUinfluencerUmanagementUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
