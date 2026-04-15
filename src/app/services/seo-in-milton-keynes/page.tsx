import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Milton Keynes",
  description: "Top-rated SEO company in Milton Keynes. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo milton keynes", "seo agency milton keynes", "seo company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-milton-keynes",
  },
  openGraph: {
    title: "Best SEO Agency in Milton Keynes",
    description: "Top-rated SEO company in Milton Keynes. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Milton Keynes",
    description: "Top-rated SEO company in Milton Keynes. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
