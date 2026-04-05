import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Branding Agency in Indore",
  description: "TML offers expert Branding services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding indore", "branding agency indore", "branding company indore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-indore",
  },
  openGraph: {
    title: "Branding Agency in Indore",
    description: "TML offers expert Branding services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Indore",
    description: "TML offers expert Branding services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
