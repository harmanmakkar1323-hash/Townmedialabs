import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Panipat",
  description: "Top-rated Branding company in Panipat. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding panipat", "branding agency panipat", "branding company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-panipat",
  },
  openGraph: {
    title: "Best Branding Agency in Panipat",
    description: "Top-rated Branding company in Panipat. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Panipat",
    description: "Top-rated Branding company in Panipat. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
