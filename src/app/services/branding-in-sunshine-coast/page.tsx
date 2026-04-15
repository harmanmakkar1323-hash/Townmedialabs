import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sunshine Coast",
  description: "Top-rated Branding company in Sunshine Coast. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding sunshine coast", "branding agency sunshine coast", "branding company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sunshine-coast",
  },
  openGraph: {
    title: "Best Branding Agency in Sunshine Coast",
    description: "Top-rated Branding company in Sunshine Coast. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Sunshine Coast",
    description: "Top-rated Branding company in Sunshine Coast. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
