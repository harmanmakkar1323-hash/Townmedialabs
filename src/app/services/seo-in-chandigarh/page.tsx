import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Chandigarh",
  description: "Top-rated seo company in Chandigarh. TML offers expert seo services for 500+ businesses across Punjab. Get a free seo consultation today.",
  keywords: ["best seo agency chandigarh", "seo company chandigarh", "seo services chandigarh", "best seo chandigarh", "top seo agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-chandigarh/",
  },
  openGraph: {
    title: "Best SEO Agency in Chandigarh",
    description: "Top-rated seo company in Chandigarh. TML offers expert seo services for 500+ businesses across Punjab. Get a free seo consultation today.",
    url: "https://townmedialabs.com/services/seo-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Chandigarh",
    description: "Top-rated seo company in Chandigarh. TML offers expert seo services for 500+ businesses across Punjab. Get a free seo consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UseoUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
