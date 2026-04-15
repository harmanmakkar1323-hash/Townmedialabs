import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Gold Coast",
  description: "Top-rated Graphic Design company in Gold Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design gold coast", "graphic design agency gold coast", "graphic design company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-gold-coast",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Gold Coast",
    description: "Top-rated Graphic Design company in Gold Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Gold Coast",
    description: "Top-rated Graphic Design company in Gold Coast. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
