import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cambridge",
  description: "Top-rated Graphic Design company in Cambridge. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design cambridge", "graphic design agency cambridge", "graphic design company cambridge"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-cambridge",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Cambridge",
    description: "Top-rated Graphic Design company in Cambridge. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-cambridge",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Cambridge" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Cambridge",
    description: "Top-rated Graphic Design company in Cambridge. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCambridgePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
