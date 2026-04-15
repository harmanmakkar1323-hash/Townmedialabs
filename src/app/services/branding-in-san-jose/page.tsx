import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Jose",
  description: "Top-rated Branding company in San Jose. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding san jose", "branding agency san jose", "branding company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-san-jose",
  },
  openGraph: {
    title: "Best Branding Agency in San Jose",
    description: "Top-rated Branding company in San Jose. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in San Jose",
    description: "Top-rated Branding company in San Jose. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
