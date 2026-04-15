import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Virginia Beach",
  description: "Top-rated Lead Generation company in Virginia Beach. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation virginia beach", "lead generation agency virginia beach", "lead generation company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-virginia-beach",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Virginia Beach",
    description: "Top-rated Lead Generation company in Virginia Beach. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Virginia Beach",
    description: "Top-rated Lead Generation company in Virginia Beach. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
