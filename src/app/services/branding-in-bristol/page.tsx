import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bristol",
  description: "Top-rated Branding company in Bristol. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding bristol", "branding agency bristol", "branding company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bristol",
  },
  openGraph: {
    title: "Best Branding Agency in Bristol",
    description: "Top-rated Branding company in Bristol. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bristol" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Bristol",
    description: "Top-rated Branding company in Bristol. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBristolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
