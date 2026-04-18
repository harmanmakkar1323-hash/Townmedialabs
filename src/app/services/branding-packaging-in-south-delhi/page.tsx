import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in South Delhi",
  description: "Top-rated Branding & Packaging company in South Delhi. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
  keywords: ["branding and packaging south delhi", "branding and packaging agency south delhi", "branding and packaging company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-south-delhi",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in South Delhi",
    description: "Top-rated Branding & Packaging company in South Delhi. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in South Delhi",
    description: "Top-rated Branding & Packaging company in South Delhi. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
