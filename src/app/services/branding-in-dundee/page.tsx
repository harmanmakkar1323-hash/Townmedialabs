import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Dundee",
  description: "Top-rated Branding company in Dundee. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding dundee", "branding agency dundee", "branding company dundee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-dundee",
  },
  openGraph: {
    title: "Best Branding Agency in Dundee",
    description: "Top-rated Branding company in Dundee. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-dundee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Dundee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Dundee",
    description: "Top-rated Branding company in Dundee. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDundeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
