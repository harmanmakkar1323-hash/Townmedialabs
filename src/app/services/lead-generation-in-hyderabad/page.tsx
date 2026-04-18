import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Hyderabad",
  description: "Top-rated Lead Generation company in Hyderabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation hyderabad", "lead generation agency hyderabad", "lead generation company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-hyderabad",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Hyderabad",
    description: "Top-rated Lead Generation company in Hyderabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Hyderabad",
    description: "Top-rated Lead Generation company in Hyderabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
