import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Milton Keynes",
  description: "Top-rated Website Development company in Milton Keynes. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development milton keynes", "website development agency milton keynes", "website development company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-milton-keynes",
  },
  openGraph: {
    title: "Best Website Development Agency in Milton Keynes",
    description: "Top-rated Website Development company in Milton Keynes. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Milton Keynes",
    description: "Top-rated Website Development company in Milton Keynes. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
