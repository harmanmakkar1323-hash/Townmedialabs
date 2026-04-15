import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Tauranga",
  description: "Top-rated Branding company in Tauranga. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding tauranga", "branding agency tauranga", "branding tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-tauranga",
  },
  openGraph: {
    title: "Best Branding Agency in Tauranga",
    description: "Top-rated Branding company in Tauranga. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Tauranga",
    description: "Top-rated Branding company in Tauranga. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
