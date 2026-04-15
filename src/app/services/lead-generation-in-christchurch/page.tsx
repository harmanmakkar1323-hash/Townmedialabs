import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Christchurch",
  description: "Top-rated Lead Generation company in Christchurch. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation christchurch", "lead generation agency christchurch", "lead generation christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-christchurch",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Christchurch",
    description: "Top-rated Lead Generation company in Christchurch. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Christchurch",
    description: "Top-rated Lead Generation company in Christchurch. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
