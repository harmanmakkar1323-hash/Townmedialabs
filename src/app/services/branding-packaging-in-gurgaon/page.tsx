import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Gurgaon",
  description: "TML offers expert Branding and Packaging services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging gurgaon", "branding and packaging agency gurgaon", "branding and packaging company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-gurgaon",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Gurgaon",
    description: "TML offers expert Branding and Packaging services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Gurgaon",
    description: "TML offers expert Branding and Packaging services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
