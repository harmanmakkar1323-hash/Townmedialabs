import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Abu Dhabi",
  description: "Top-rated Lead Generation company in Abu Dhabi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation abu dhabi", "lead generation agency abu dhabi", "lead generation company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Abu Dhabi",
    description: "Top-rated Lead Generation company in Abu Dhabi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Abu Dhabi",
    description: "Top-rated Lead Generation company in Abu Dhabi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
