import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Middlesbrough",
  description: "Top-rated Branding company in Middlesbrough. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding middlesbrough", "branding agency middlesbrough", "branding company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-middlesbrough",
  },
  openGraph: {
    title: "Best Branding Agency in Middlesbrough",
    description: "Top-rated Branding company in Middlesbrough. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Middlesbrough",
    description: "Top-rated Branding company in Middlesbrough. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
