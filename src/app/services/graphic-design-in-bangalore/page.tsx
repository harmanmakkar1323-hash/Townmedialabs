import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bangalore | TML Agency",
  description: "TML offers expert graphic design services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bangalore", "graphic design agency bangalore", "graphic design company bangalore"],
};

export default function GraphicdesignInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
