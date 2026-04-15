import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Middlesbrough",
  description: "Top-rated Graphic Design company in Middlesbrough. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design middlesbrough", "graphic design agency middlesbrough", "graphic design company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-middlesbrough",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Middlesbrough",
    description: "Top-rated Graphic Design company in Middlesbrough. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Middlesbrough",
    description: "Top-rated Graphic Design company in Middlesbrough. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
