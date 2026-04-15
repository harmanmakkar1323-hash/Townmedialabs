import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wollongong",
  description: "Top-rated Graphic Design company in Wollongong. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design wollongong", "graphic design agency wollongong", "graphic design company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wollongong",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Wollongong",
    description: "Top-rated Graphic Design company in Wollongong. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Wollongong",
    description: "Top-rated Graphic Design company in Wollongong. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
