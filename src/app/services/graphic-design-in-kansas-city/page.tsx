import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Kansas City | TML Agency",
  description: "TML offers expert graphic design services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kansas city", "graphic design agency kansas city", "graphic design company kansas city"],
};

export default function GraphicDesignInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
