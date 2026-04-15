import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cleveland",
  description: "Top-rated Branding company in Cleveland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding cleveland", "branding agency cleveland", "branding company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cleveland",
  },
  openGraph: {
    title: "Best Branding Agency in Cleveland",
    description: "Top-rated Branding company in Cleveland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cleveland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Cleveland",
    description: "Top-rated Branding company in Cleveland. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInClevelandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
