import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Charlotte",
  description: "Top-rated Graphic Design company in Charlotte. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design charlotte", "graphic design agency charlotte", "graphic design company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-charlotte",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Charlotte",
    description: "Top-rated Graphic Design company in Charlotte. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Charlotte" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Charlotte",
    description: "Top-rated Graphic Design company in Charlotte. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCharlottePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
