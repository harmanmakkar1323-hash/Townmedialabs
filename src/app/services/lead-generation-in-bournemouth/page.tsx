import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bournemouth",
  description: "Top-rated Lead Generation company in Bournemouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation bournemouth", "lead generation agency bournemouth", "lead generation company bournemouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-bournemouth",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Bournemouth",
    description: "Top-rated Lead Generation company in Bournemouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-bournemouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Bournemouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Bournemouth",
    description: "Top-rated Lead Generation company in Bournemouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInBournemouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
