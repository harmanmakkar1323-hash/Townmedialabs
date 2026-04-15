import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Adelaide",
  description: "Top-rated Packaging Design company in Adelaide. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design adelaide", "packaging design agency adelaide", "packaging design company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-adelaide",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Adelaide",
    description: "Top-rated Packaging Design company in Adelaide. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Adelaide",
    description: "Top-rated Packaging Design company in Adelaide. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
