import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Delhi",
  description: "Top-rated Graphic Design company in Delhi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design delhi", "graphic design agency delhi", "graphic design company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-delhi",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Delhi",
    description: "Top-rated Graphic Design company in Delhi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Delhi",
    description: "Top-rated Graphic Design company in Delhi. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
