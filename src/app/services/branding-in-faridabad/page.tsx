import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Faridabad",
  description: "Top-rated Branding company in Faridabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding faridabad", "branding agency faridabad", "branding company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-faridabad",
  },
  openGraph: {
    title: "Best Branding Agency in Faridabad",
    description: "Top-rated Branding company in Faridabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Faridabad",
    description: "Top-rated Branding company in Faridabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInFaridabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
