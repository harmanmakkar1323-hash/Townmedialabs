import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cheltenham",
  description: "Top-rated Graphic Design company in Cheltenham. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design cheltenham", "graphic design agency cheltenham", "graphic design company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-cheltenham",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Cheltenham",
    description: "Top-rated Graphic Design company in Cheltenham. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Cheltenham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Cheltenham",
    description: "Top-rated Graphic Design company in Cheltenham. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCheltenhamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
