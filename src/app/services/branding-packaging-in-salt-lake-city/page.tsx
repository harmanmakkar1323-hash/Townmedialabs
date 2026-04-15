import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Salt Lake City",
  description: "Top-rated Packaging Design company in Salt Lake City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design salt lake city", "packaging design agency salt lake city", "packaging design company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Salt Lake City",
    description: "Top-rated Packaging Design company in Salt Lake City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Salt Lake City",
    description: "Top-rated Packaging Design company in Salt Lake City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
