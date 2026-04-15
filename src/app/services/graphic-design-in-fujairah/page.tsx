import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Fujairah",
  description: "Top-rated Graphic Design company in Fujairah. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design fujairah", "graphic design agency fujairah", "graphic design company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-fujairah",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Fujairah",
    description: "Top-rated Graphic Design company in Fujairah. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Fujairah",
    description: "Top-rated Graphic Design company in Fujairah. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
