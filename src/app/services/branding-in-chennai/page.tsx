import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Chennai",
  description: "Top-rated Branding company in Chennai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding chennai", "branding agency chennai", "branding company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-chennai",
  },
  openGraph: {
    title: "Best Branding Agency in Chennai",
    description: "Top-rated Branding company in Chennai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Chennai",
    description: "Top-rated Branding company in Chennai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInChennaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
