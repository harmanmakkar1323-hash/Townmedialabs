import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Diego",
  description: "Top-rated Branding company in San Diego. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding san diego", "branding agency san diego", "branding company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-san-diego",
  },
  openGraph: {
    title: "Best Branding Agency in San Diego",
    description: "Top-rated Branding company in San Diego. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in San Diego",
    description: "Top-rated Branding company in San Diego. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
