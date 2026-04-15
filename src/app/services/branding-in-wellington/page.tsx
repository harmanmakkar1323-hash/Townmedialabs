import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Wellington",
  description: "Top-rated Branding company in Wellington. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding wellington", "branding agency wellington", "branding wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-wellington",
  },
  openGraph: {
    title: "Best Branding Agency in Wellington",
    description: "Top-rated Branding company in Wellington. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Wellington" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Wellington",
    description: "Top-rated Branding company in Wellington. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInWellingtonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
