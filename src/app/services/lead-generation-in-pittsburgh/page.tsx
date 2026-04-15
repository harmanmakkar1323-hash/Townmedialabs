import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Pittsburgh",
  description: "Top-rated Lead Generation company in Pittsburgh. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation pittsburgh", "lead generation agency pittsburgh", "lead generation company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-pittsburgh",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Pittsburgh",
    description: "Top-rated Lead Generation company in Pittsburgh. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Pittsburgh",
    description: "Top-rated Lead Generation company in Pittsburgh. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
