import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Oklahoma City",
  description: "Top-rated Graphic Design company in Oklahoma City. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design oklahoma city", "graphic design agency oklahoma city", "graphic design company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Oklahoma City",
    description: "Top-rated Graphic Design company in Oklahoma City. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Oklahoma City",
    description: "Top-rated Graphic Design company in Oklahoma City. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
