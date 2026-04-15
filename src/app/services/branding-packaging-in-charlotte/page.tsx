import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Charlotte",
  description: "Top-rated Packaging Design company in Charlotte. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design charlotte", "packaging design agency charlotte", "packaging design company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-charlotte",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Charlotte",
    description: "Top-rated Packaging Design company in Charlotte. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Charlotte" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Charlotte",
    description: "Top-rated Packaging Design company in Charlotte. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInCharlottePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
