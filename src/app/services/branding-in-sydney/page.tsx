import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sydney",
  description: "Top-rated Branding company in Sydney. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding sydney", "branding agency sydney", "branding company sydney"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sydney",
  },
  openGraph: {
    title: "Best Branding Agency in Sydney",
    description: "Top-rated Branding company in Sydney. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Sydney",
    description: "Top-rated Branding company in Sydney. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSydneyPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
