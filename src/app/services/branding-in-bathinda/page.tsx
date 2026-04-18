import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bathinda",
  description: "Top-rated Branding company in Bathinda. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding bathinda", "branding agency bathinda", "branding company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bathinda",
  },
  openGraph: {
    title: "Best Branding Agency in Bathinda",
    description: "Top-rated Branding company in Bathinda. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bathinda" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Bathinda",
    description: "Top-rated Branding company in Bathinda. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBathindaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
