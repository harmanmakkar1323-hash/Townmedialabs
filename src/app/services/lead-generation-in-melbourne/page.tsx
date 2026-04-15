import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Melbourne",
  description: "Top-rated Lead Generation company in Melbourne. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation melbourne", "lead generation agency melbourne", "lead generation company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-melbourne",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Melbourne",
    description: "Top-rated Lead Generation company in Melbourne. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Melbourne",
    description: "Top-rated Lead Generation company in Melbourne. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
