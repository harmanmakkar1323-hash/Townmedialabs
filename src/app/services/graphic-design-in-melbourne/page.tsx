import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Melbourne",
  description: "Top-rated Graphic Design company in Melbourne. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design melbourne", "graphic design agency melbourne", "graphic design company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-melbourne",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Melbourne",
    description: "Top-rated Graphic Design company in Melbourne. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Melbourne",
    description: "Top-rated Graphic Design company in Melbourne. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
