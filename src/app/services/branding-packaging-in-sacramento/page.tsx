import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sacramento",
  description: "Top-rated Packaging Design company in Sacramento. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design sacramento", "packaging design agency sacramento", "packaging design company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-sacramento",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Sacramento",
    description: "Top-rated Packaging Design company in Sacramento. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Sacramento" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Sacramento",
    description: "Top-rated Packaging Design company in Sacramento. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSacramentoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
