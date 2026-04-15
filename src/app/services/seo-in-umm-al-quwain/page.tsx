import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Umm Al Quwain",
  description: "Top-rated SEO company in Umm Al Quwain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo umm al quwain", "seo agency umm al quwain", "seo company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best SEO Agency in Umm Al Quwain",
    description: "Top-rated SEO company in Umm Al Quwain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Umm Al Quwain",
    description: "Top-rated SEO company in Umm Al Quwain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
