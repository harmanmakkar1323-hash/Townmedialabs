import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Zirakpur",
  description: "Top-rated Graphic Design company in Zirakpur. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design zirakpur", "graphic design agency zirakpur", "graphic design company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-zirakpur",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Zirakpur",
    description: "Top-rated Graphic Design company in Zirakpur. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Zirakpur",
    description: "Top-rated Graphic Design company in Zirakpur. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
