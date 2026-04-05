import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Bhopal",
  description: "TML offers expert Branding and Packaging services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging bhopal", "branding and packaging agency bhopal", "branding and packaging company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-bhopal",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Bhopal",
    description: "TML offers expert Branding and Packaging services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Bhopal",
    description: "TML offers expert Branding and Packaging services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
