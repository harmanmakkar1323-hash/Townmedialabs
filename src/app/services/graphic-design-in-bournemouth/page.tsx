import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bournemouth",
  description: "Top-rated Graphic Design company in Bournemouth. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design bournemouth", "graphic design agency bournemouth", "graphic design company bournemouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-bournemouth",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Bournemouth",
    description: "Top-rated Graphic Design company in Bournemouth. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-bournemouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Bournemouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Bournemouth",
    description: "Top-rated Graphic Design company in Bournemouth. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBournemouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
