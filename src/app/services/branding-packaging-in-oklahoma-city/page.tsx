import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Oklahoma City",
  description: "Top-rated Packaging Design company in Oklahoma City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design oklahoma city", "packaging design agency oklahoma city", "packaging design company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Oklahoma City",
    description: "Top-rated Packaging Design company in Oklahoma City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Oklahoma City",
    description: "Top-rated Packaging Design company in Oklahoma City. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
