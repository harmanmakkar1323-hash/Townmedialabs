import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Stoke-on-Trent",
  description: "Top-rated Branding company in Stoke-on-Trent. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding stoke-on-trent", "branding agency stoke-on-trent", "branding company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Branding Agency in Stoke-on-Trent",
    description: "Top-rated Branding company in Stoke-on-Trent. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Stoke-on-Trent",
    description: "Top-rated Branding company in Stoke-on-Trent. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
