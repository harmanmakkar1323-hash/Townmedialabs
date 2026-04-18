import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Visakhapatnam",
  description: "Top-rated Branding & Packaging company in Visakhapatnam. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
  keywords: ["branding and packaging visakhapatnam", "branding and packaging agency visakhapatnam", "branding and packaging company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-visakhapatnam",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Visakhapatnam",
    description: "Top-rated Branding & Packaging company in Visakhapatnam. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Visakhapatnam",
    description: "Top-rated Branding & Packaging company in Visakhapatnam. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
