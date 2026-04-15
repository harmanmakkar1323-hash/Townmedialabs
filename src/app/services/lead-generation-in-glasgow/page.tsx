import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Glasgow",
  description: "Top-rated Lead Generation company in Glasgow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation glasgow", "lead generation agency glasgow", "lead generation company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-glasgow",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Glasgow",
    description: "Top-rated Lead Generation company in Glasgow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Glasgow",
    description: "Top-rated Lead Generation company in Glasgow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
