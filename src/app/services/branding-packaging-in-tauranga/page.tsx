import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Tauranga",
  description: "Top-rated Packaging Design company in Tauranga. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design tauranga", "packaging design agency tauranga", "packaging design tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-tauranga",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Tauranga",
    description: "Top-rated Packaging Design company in Tauranga. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Tauranga",
    description: "Top-rated Packaging Design company in Tauranga. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
