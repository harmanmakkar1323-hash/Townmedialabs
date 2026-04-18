import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Amritsar",
  description: "Top-rated Graphic Design company in Amritsar. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design amritsar", "graphic design agency amritsar", "graphic design company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-amritsar",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Amritsar",
    description: "Top-rated Graphic Design company in Amritsar. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Amritsar",
    description: "Top-rated Graphic Design company in Amritsar. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
