import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Napier",
  description: "Top-rated Branding company in Napier. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding napier", "branding agency napier", "branding napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-napier",
  },
  openGraph: {
    title: "Best Branding Agency in Napier",
    description: "Top-rated Branding company in Napier. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Napier",
    description: "Top-rated Branding company in Napier. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
