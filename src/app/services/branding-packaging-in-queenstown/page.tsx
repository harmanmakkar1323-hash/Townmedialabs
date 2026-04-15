import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Queenstown",
  description: "Top-rated Packaging Design company in Queenstown. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design queenstown", "packaging design agency queenstown", "packaging design queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-queenstown",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Queenstown",
    description: "Top-rated Packaging Design company in Queenstown. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Queenstown" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Queenstown",
    description: "Top-rated Packaging Design company in Queenstown. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInQueenstownPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
