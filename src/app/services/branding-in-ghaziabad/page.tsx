import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ghaziabad",
  description: "Top-rated Branding company in Ghaziabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding ghaziabad", "branding agency ghaziabad", "branding company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ghaziabad",
  },
  openGraph: {
    title: "Best Branding Agency in Ghaziabad",
    description: "Top-rated Branding company in Ghaziabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Ghaziabad",
    description: "Top-rated Branding company in Ghaziabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
