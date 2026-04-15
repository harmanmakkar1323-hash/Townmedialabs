import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Umm Al Quwain",
  description: "Top-rated Website Development company in Umm Al Quwain. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development umm al quwain", "website development agency umm al quwain", "website development company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Website Development Agency in Umm Al Quwain",
    description: "Top-rated Website Development company in Umm Al Quwain. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Umm Al Quwain",
    description: "Top-rated Website Development company in Umm Al Quwain. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
