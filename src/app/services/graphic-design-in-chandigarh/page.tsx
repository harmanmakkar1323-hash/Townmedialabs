import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Chandigarh",
  description: "Top-rated graphic design company in Chandigarh. TML offers expert graphic design services for 500+ businesses across Punjab. Get a free graphic design consultation today.",
  keywords: ["best graphic design agency chandigarh", "graphic design company chandigarh", "graphic design services chandigarh", "best graphic design chandigarh", "top graphic design agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-chandigarh/",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Chandigarh",
    description: "Top-rated graphic design company in Chandigarh. TML offers expert graphic design services for 500+ businesses across Punjab. Get a free graphic design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Chandigarh",
    description: "Top-rated graphic design company in Chandigarh. TML offers expert graphic design services for 500+ businesses across Punjab. Get a free graphic design consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UgraphicUdesignUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
