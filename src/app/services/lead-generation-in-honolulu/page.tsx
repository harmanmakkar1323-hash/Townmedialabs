import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Honolulu",
  description: "Top-rated Lead Generation company in Honolulu. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation honolulu", "lead generation agency honolulu", "lead generation company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-honolulu",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Honolulu",
    description: "Top-rated Lead Generation company in Honolulu. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Honolulu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Honolulu",
    description: "Top-rated Lead Generation company in Honolulu. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInHonoluluPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
