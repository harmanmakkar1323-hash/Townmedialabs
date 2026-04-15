import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Virginia Beach",
  description: "Top-rated Graphic Design company in Virginia Beach. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design virginia beach", "graphic design agency virginia beach", "graphic design company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-virginia-beach",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Virginia Beach",
    description: "Top-rated Graphic Design company in Virginia Beach. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Virginia Beach",
    description: "Top-rated Graphic Design company in Virginia Beach. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
