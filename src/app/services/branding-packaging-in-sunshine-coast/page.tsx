import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sunshine Coast",
  description: "Top-rated Packaging Design company in Sunshine Coast. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design sunshine coast", "packaging design agency sunshine coast", "packaging design company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-sunshine-coast",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Sunshine Coast",
    description: "Top-rated Packaging Design company in Sunshine Coast. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Sunshine Coast",
    description: "Top-rated Packaging Design company in Sunshine Coast. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
