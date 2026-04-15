import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Tampa",
  description: "Top-rated Branding company in Tampa. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding tampa", "branding agency tampa", "branding company tampa"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-tampa",
  },
  openGraph: {
    title: "Best Branding Agency in Tampa",
    description: "Top-rated Branding company in Tampa. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-tampa",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Tampa" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Tampa",
    description: "Top-rated Branding company in Tampa. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInTampaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
