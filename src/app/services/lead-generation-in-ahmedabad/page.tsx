import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ahmedabad",
  description: "Top-rated Lead Generation company in Ahmedabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation ahmedabad", "lead generation agency ahmedabad", "lead generation company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-ahmedabad",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Ahmedabad",
    description: "Top-rated Lead Generation company in Ahmedabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Ahmedabad",
    description: "Top-rated Lead Generation company in Ahmedabad. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
