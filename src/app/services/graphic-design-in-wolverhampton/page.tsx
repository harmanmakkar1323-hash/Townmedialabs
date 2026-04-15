import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wolverhampton",
  description: "Top-rated Graphic Design company in Wolverhampton. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design wolverhampton", "graphic design agency wolverhampton", "graphic design company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Wolverhampton",
    description: "Top-rated Graphic Design company in Wolverhampton. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Wolverhampton",
    description: "Top-rated Graphic Design company in Wolverhampton. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
