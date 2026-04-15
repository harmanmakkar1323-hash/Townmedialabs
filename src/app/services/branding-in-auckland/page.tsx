import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Auckland",
  description: "Top-rated Branding company in Auckland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding auckland", "branding agency auckland", "branding company auckland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-auckland",
  },
  openGraph: {
    title: "Best Branding Agency in Auckland",
    description: "Top-rated Branding company in Auckland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-auckland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Auckland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Auckland",
    description: "Top-rated Branding company in Auckland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAucklandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
