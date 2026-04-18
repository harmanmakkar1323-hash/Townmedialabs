import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Indore",
  description: "Top-rated Branding company in Indore. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding indore", "branding agency indore", "branding company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-indore",
  },
  openGraph: {
    title: "Best Branding Agency in Indore",
    description: "Top-rated Branding company in Indore. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Indore",
    description: "Top-rated Branding company in Indore. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
