import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Liverpool",
  description: "Top-rated Packaging Design company in Liverpool. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design liverpool", "packaging design agency liverpool", "packaging design company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-liverpool",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Liverpool",
    description: "Top-rated Packaging Design company in Liverpool. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Liverpool",
    description: "Top-rated Packaging Design company in Liverpool. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
