import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Abu Dhabi",
  description: "Top-rated Graphic Design company in Abu Dhabi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design abu dhabi", "graphic design agency abu dhabi", "graphic design company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Abu Dhabi",
    description: "Top-rated Graphic Design company in Abu Dhabi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Abu Dhabi",
    description: "Top-rated Graphic Design company in Abu Dhabi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
