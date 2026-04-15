import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ras Al Khaimah",
  description: "Top-rated Lead Generation company in Ras Al Khaimah. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation ras al khaimah", "lead generation agency ras al khaimah", "lead generation company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Ras Al Khaimah",
    description: "Top-rated Lead Generation company in Ras Al Khaimah. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Ras Al Khaimah",
    description: "Top-rated Lead Generation company in Ras Al Khaimah. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
