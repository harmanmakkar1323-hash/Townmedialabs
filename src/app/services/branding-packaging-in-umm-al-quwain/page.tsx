import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Umm Al Quwain",
  description: "Top-rated Packaging Design company in Umm Al Quwain. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
  keywords: ["packaging design umm al quwain", "packaging design agency umm al quwain", "packaging design company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Umm Al Quwain",
    description: "Top-rated Packaging Design company in Umm Al Quwain. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Umm Al Quwain",
    description: "Top-rated Packaging Design company in Umm Al Quwain. TML offers expert Packaging Design services for 500+ businesses. Get a free Packaging Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
