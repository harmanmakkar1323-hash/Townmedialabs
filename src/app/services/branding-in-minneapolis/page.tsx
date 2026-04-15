import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Minneapolis",
  description: "Top-rated Branding company in Minneapolis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding minneapolis", "branding agency minneapolis", "branding company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-minneapolis",
  },
  openGraph: {
    title: "Best Branding Agency in Minneapolis",
    description: "Top-rated Branding company in Minneapolis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Minneapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Minneapolis",
    description: "Top-rated Branding company in Minneapolis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMinneapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
