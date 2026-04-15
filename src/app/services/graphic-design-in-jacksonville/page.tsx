import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Jacksonville",
  description: "Top-rated Graphic Design company in Jacksonville. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design jacksonville", "graphic design agency jacksonville", "graphic design company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-jacksonville",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Jacksonville",
    description: "Top-rated Graphic Design company in Jacksonville. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Jacksonville",
    description: "Top-rated Graphic Design company in Jacksonville. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
