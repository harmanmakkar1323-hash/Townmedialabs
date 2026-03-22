import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Edinburgh | TML Agency",
  description: "TML offers expert graphic design services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design edinburgh", "graphic design agency edinburgh", "graphic design company edinburgh"],
};

export default function GraphicDesignInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
