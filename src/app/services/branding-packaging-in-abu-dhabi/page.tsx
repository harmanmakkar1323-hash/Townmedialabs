import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Abu Dhabi",
  description: "Top-rated Packaging Design company in Abu Dhabi. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design abu dhabi", "packaging design agency abu dhabi", "packaging design company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Abu Dhabi",
    description: "Top-rated Packaging Design company in Abu Dhabi. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Abu Dhabi",
    description: "Top-rated Packaging Design company in Abu Dhabi. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
