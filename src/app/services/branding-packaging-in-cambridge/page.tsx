import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cambridge",
  description: "Top-rated Packaging Design company in Cambridge. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design cambridge", "packaging design agency cambridge", "packaging design company cambridge"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-cambridge",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Cambridge",
    description: "Top-rated Packaging Design company in Cambridge. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-cambridge",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Cambridge" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Cambridge",
    description: "Top-rated Packaging Design company in Cambridge. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInCambridgePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
