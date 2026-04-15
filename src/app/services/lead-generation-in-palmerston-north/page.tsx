import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Palmerston North",
  description: "Top-rated Lead Generation company in Palmerston North. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation palmerston north", "lead generation agency palmerston north", "lead generation palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-palmerston-north",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Palmerston North",
    description: "Top-rated Lead Generation company in Palmerston North. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Palmerston North",
    description: "Top-rated Lead Generation company in Palmerston North. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
