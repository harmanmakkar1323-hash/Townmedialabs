import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Townsville",
  description: "Top-rated Branding company in Townsville. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding townsville", "branding agency townsville", "branding company townsville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-townsville",
  },
  openGraph: {
    title: "Best Branding Agency in Townsville",
    description: "Top-rated Branding company in Townsville. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Townsville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Townsville",
    description: "Top-rated Branding company in Townsville. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInTownsvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
