import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bhopal",
  description: "Top-rated Branding company in Bhopal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding bhopal", "branding agency bhopal", "branding company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bhopal",
  },
  openGraph: {
    title: "Best Branding Agency in Bhopal",
    description: "Top-rated Branding company in Bhopal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Bhopal",
    description: "Top-rated Branding company in Bhopal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
