import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Ahmedabad",
  description: "Top-rated Branding & Packaging company in Ahmedabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
  keywords: ["branding and packaging ahmedabad", "branding and packaging agency ahmedabad", "branding and packaging company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ahmedabad",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Ahmedabad",
    description: "Top-rated Branding & Packaging company in Ahmedabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Ahmedabad",
    description: "Top-rated Branding & Packaging company in Ahmedabad. TML offers expert Branding & Packaging services for 500+ businesses. Get a free Branding & Packaging consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
