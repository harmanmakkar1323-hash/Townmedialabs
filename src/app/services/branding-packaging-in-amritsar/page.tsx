import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Amritsar",
  description: "Top-rated Branding & Packaging company in Amritsar. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
  keywords: ["branding and packaging amritsar", "branding and packaging agency amritsar", "branding and packaging company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-amritsar",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Amritsar",
    description: "Top-rated Branding & Packaging company in Amritsar. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Amritsar",
    description: "Top-rated Branding & Packaging company in Amritsar. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
