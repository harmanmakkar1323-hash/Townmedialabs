import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Oklahoma City",
  description: "Top-rated Branding company in Oklahoma City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding oklahoma city", "branding agency oklahoma city", "branding company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Branding Agency in Oklahoma City",
    description: "Top-rated Branding company in Oklahoma City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Oklahoma City",
    description: "Top-rated Branding company in Oklahoma City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
