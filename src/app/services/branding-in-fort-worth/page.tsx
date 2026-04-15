import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Fort Worth",
  description: "Top-rated Branding company in Fort Worth. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding fort worth", "branding agency fort worth", "branding company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-fort-worth",
  },
  openGraph: {
    title: "Best Branding Agency in Fort Worth",
    description: "Top-rated Branding company in Fort Worth. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Fort Worth",
    description: "Top-rated Branding company in Fort Worth. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
