import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Indore",
  description: "Top-rated Graphic Design company in Indore. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design indore", "graphic design agency indore", "graphic design company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-indore",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Indore",
    description: "Top-rated Graphic Design company in Indore. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Indore",
    description: "Top-rated Graphic Design company in Indore. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
