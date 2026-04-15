import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Memphis",
  description: "Top-rated Branding company in Memphis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding memphis", "branding agency memphis", "branding company memphis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-memphis",
  },
  openGraph: {
    title: "Best Branding Agency in Memphis",
    description: "Top-rated Branding company in Memphis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-memphis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Memphis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Memphis",
    description: "Top-rated Branding company in Memphis. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMemphisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
