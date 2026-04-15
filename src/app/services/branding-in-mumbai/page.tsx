import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Mumbai",
  description: "Top-rated Branding company in Mumbai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding mumbai", "branding agency mumbai", "branding company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-mumbai",
  },
  openGraph: {
    title: "Best Branding Agency in Mumbai",
    description: "Top-rated Branding company in Mumbai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Mumbai",
    description: "Top-rated Branding company in Mumbai. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
