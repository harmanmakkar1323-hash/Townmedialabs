import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Plymouth",
  description: "Top-rated Lead Generation company in Plymouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation plymouth", "lead generation agency plymouth", "lead generation company plymouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-plymouth",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Plymouth",
    description: "Top-rated Lead Generation company in Plymouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-plymouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Plymouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Plymouth",
    description: "Top-rated Lead Generation company in Plymouth. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPlymouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
