import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Honolulu",
  description: "Top-rated Branding company in Honolulu. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding honolulu", "branding agency honolulu", "branding company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-honolulu",
  },
  openGraph: {
    title: "Best Branding Agency in Honolulu",
    description: "Top-rated Branding company in Honolulu. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Honolulu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Honolulu",
    description: "Top-rated Branding company in Honolulu. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHonoluluPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
