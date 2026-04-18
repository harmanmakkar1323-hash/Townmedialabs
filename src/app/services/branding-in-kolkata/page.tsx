import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Kolkata",
  description: "Top-rated Branding company in Kolkata. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding kolkata", "branding agency kolkata", "branding company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-kolkata",
  },
  openGraph: {
    title: "Best Branding Agency in Kolkata",
    description: "Top-rated Branding company in Kolkata. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Kolkata",
    description: "Top-rated Branding company in Kolkata. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
