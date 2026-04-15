import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Kochi",
  description: "Top-rated Branding company in Kochi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding kochi", "branding agency kochi", "branding company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-kochi",
  },
  openGraph: {
    title: "Best Branding Agency in Kochi",
    description: "Top-rated Branding company in Kochi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Kochi",
    description: "Top-rated Branding company in Kochi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKochiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
