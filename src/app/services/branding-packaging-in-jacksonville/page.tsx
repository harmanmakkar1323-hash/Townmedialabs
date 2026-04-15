import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Jacksonville",
  description: "Top-rated Packaging Design company in Jacksonville. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design jacksonville", "packaging design agency jacksonville", "packaging design company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-jacksonville",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Jacksonville",
    description: "Top-rated Packaging Design company in Jacksonville. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Jacksonville",
    description: "Top-rated Packaging Design company in Jacksonville. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
