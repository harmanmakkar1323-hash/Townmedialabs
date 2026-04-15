import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Hyderabad",
  description: "Top-rated Branding & Packaging company in Hyderabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
  keywords: ["branding and packaging hyderabad", "branding and packaging agency hyderabad", "branding and packaging company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-hyderabad",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Hyderabad",
    description: "Top-rated Branding & Packaging company in Hyderabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Hyderabad",
    description: "Top-rated Branding & Packaging company in Hyderabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
