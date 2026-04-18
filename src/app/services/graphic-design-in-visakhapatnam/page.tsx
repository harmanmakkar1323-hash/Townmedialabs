import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Visakhapatnam",
  description: "Top-rated Graphic Design company in Visakhapatnam. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design visakhapatnam", "graphic design agency visakhapatnam", "graphic design company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-visakhapatnam",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Visakhapatnam",
    description: "Top-rated Graphic Design company in Visakhapatnam. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Visakhapatnam",
    description: "Top-rated Graphic Design company in Visakhapatnam. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
