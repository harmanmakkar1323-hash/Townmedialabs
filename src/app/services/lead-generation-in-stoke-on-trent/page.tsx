import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Stoke-on-Trent",
  description: "Top-rated Lead Generation company in Stoke-on-Trent. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation stoke-on-trent", "lead generation agency stoke-on-trent", "lead generation company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Stoke-on-Trent",
    description: "Top-rated Lead Generation company in Stoke-on-Trent. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Stoke-on-Trent",
    description: "Top-rated Lead Generation company in Stoke-on-Trent. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
