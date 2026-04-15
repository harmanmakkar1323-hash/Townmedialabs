import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in St. Louis",
  description: "Top-rated Branding company in St. Louis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding st. louis", "branding agency st. louis", "branding company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-st-louis",
  },
  openGraph: {
    title: "Best Branding Agency in St. Louis",
    description: "Top-rated Branding company in St. Louis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in St. Louis",
    description: "Top-rated Branding company in St. Louis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
