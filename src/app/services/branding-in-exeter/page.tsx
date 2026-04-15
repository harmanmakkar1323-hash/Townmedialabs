import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Exeter",
  description: "Top-rated Branding company in Exeter. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding exeter", "branding agency exeter", "branding company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-exeter",
  },
  openGraph: {
    title: "Best Branding Agency in Exeter",
    description: "Top-rated Branding company in Exeter. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Exeter",
    description: "Top-rated Branding company in Exeter. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
