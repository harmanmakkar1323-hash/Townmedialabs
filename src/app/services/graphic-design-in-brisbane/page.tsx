import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Brisbane",
  description: "Top-rated Graphic Design company in Brisbane. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design brisbane", "graphic design agency brisbane", "graphic design company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-brisbane",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Brisbane",
    description: "Top-rated Graphic Design company in Brisbane. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Brisbane",
    description: "Top-rated Graphic Design company in Brisbane. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
