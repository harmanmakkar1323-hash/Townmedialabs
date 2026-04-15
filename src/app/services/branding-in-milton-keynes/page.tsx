import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Milton Keynes",
  description: "Top-rated Branding company in Milton Keynes. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding milton keynes", "branding agency milton keynes", "branding company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-milton-keynes",
  },
  openGraph: {
    title: "Best Branding Agency in Milton Keynes",
    description: "Top-rated Branding company in Milton Keynes. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Milton Keynes",
    description: "Top-rated Branding company in Milton Keynes. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
