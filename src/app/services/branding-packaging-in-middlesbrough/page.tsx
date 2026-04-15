import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Middlesbrough",
  description: "Top-rated Packaging Design company in Middlesbrough. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design middlesbrough", "packaging design agency middlesbrough", "packaging design company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-middlesbrough",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Middlesbrough",
    description: "Top-rated Packaging Design company in Middlesbrough. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Middlesbrough",
    description: "Top-rated Packaging Design company in Middlesbrough. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
