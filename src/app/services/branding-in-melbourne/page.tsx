import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Melbourne",
  description: "Top-rated Branding company in Melbourne. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding melbourne", "branding agency melbourne", "branding company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-melbourne",
  },
  openGraph: {
    title: "Best Branding Agency in Melbourne",
    description: "Top-rated Branding company in Melbourne. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Melbourne",
    description: "Top-rated Branding company in Melbourne. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
