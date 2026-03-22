import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Melbourne | TML Agency",
  description: "TML offers expert graphic design services in Melbourne. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design melbourne", "graphic design agency melbourne", "graphic design company melbourne"],
};

export default function GraphicDesignInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
