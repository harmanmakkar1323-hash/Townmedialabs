import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sunshine Coast",
  description: "Top-rated Graphic Design company in Sunshine Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design sunshine coast", "graphic design agency sunshine coast", "graphic design company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-sunshine-coast",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Sunshine Coast",
    description: "Top-rated Graphic Design company in Sunshine Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Sunshine Coast",
    description: "Top-rated Graphic Design company in Sunshine Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
