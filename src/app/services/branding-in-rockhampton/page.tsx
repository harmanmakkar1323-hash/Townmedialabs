import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Rockhampton",
  description: "Top-rated Branding company in Rockhampton. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding rockhampton", "branding agency rockhampton", "branding company rockhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-rockhampton",
  },
  openGraph: {
    title: "Best Branding Agency in Rockhampton",
    description: "Top-rated Branding company in Rockhampton. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-rockhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Rockhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Rockhampton",
    description: "Top-rated Branding company in Rockhampton. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInRockhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
