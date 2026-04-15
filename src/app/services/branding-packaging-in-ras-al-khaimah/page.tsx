import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ras Al Khaimah",
  description: "Top-rated Packaging Design company in Ras Al Khaimah. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design ras al khaimah", "packaging design agency ras al khaimah", "packaging design company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Ras Al Khaimah",
    description: "Top-rated Packaging Design company in Ras Al Khaimah. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Ras Al Khaimah",
    description: "Top-rated Packaging Design company in Ras Al Khaimah. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
