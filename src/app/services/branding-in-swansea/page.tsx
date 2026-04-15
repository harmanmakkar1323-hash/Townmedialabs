import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Swansea",
  description: "Top-rated Branding company in Swansea. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding swansea", "branding agency swansea", "branding company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-swansea",
  },
  openGraph: {
    title: "Best Branding Agency in Swansea",
    description: "Top-rated Branding company in Swansea. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Swansea",
    description: "Top-rated Branding company in Swansea. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
