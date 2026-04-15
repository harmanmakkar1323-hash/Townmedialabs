import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Omaha",
  description: "Top-rated Branding company in Omaha. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding omaha", "branding agency omaha", "branding company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-omaha",
  },
  openGraph: {
    title: "Best Branding Agency in Omaha",
    description: "Top-rated Branding company in Omaha. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Omaha",
    description: "Top-rated Branding company in Omaha. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
