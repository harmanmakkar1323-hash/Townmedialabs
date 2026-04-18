import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Kharar",
  description: "Top-rated Branding company in Kharar. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding kharar", "branding agency kharar", "branding company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-kharar",
  },
  openGraph: {
    title: "Best Branding Agency in Kharar",
    description: "Top-rated Branding company in Kharar. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Kharar",
    description: "Top-rated Branding company in Kharar. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
