import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Atlanta",
  description: "Top-rated Packaging Design company in Atlanta. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design atlanta", "packaging design agency atlanta", "packaging design company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-atlanta",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Atlanta",
    description: "Top-rated Packaging Design company in Atlanta. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Atlanta",
    description: "Top-rated Packaging Design company in Atlanta. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInAtlantaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
