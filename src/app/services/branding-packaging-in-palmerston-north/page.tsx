import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Palmerston North",
  description: "Top-rated Packaging Design company in Palmerston North. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design palmerston north", "packaging design agency palmerston north", "packaging design palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-palmerston-north",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Palmerston North",
    description: "Top-rated Packaging Design company in Palmerston North. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Palmerston North",
    description: "Top-rated Packaging Design company in Palmerston North. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
