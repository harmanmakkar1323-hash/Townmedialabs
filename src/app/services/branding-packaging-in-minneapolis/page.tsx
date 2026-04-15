import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Minneapolis",
  description: "Top-rated Packaging Design company in Minneapolis. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design minneapolis", "packaging design agency minneapolis", "packaging design company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-minneapolis",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Minneapolis",
    description: "Top-rated Packaging Design company in Minneapolis. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Minneapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Minneapolis",
    description: "Top-rated Packaging Design company in Minneapolis. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMinneapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
