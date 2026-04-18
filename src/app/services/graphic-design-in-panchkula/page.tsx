import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Panchkula",
  description: "Top-rated Graphic Design company in Panchkula. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design panchkula", "graphic design agency panchkula", "graphic design company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-panchkula",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Panchkula",
    description: "Top-rated Graphic Design company in Panchkula. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Panchkula",
    description: "Top-rated Graphic Design company in Panchkula. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
