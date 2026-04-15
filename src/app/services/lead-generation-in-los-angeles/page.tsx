import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Los Angeles",
  description: "Top-rated Lead Generation company in Los Angeles. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation los angeles", "lead generation agency los angeles", "lead generation company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-los-angeles",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Los Angeles",
    description: "Top-rated Lead Generation company in Los Angeles. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Los Angeles",
    description: "Top-rated Lead Generation company in Los Angeles. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
