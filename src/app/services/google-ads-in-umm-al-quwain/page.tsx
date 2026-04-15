import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Umm Al Quwain",
  description: "Top-rated Google Ads company in Umm Al Quwain. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads umm al quwain", "google ads agency umm al quwain", "google ads company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Google Ads Agency in Umm Al Quwain",
    description: "Top-rated Google Ads company in Umm Al Quwain. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Umm Al Quwain",
    description: "Top-rated Google Ads company in Umm Al Quwain. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
