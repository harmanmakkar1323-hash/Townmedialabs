import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Adelaide | TML Agency",
  description: "TML offers expert graphic design services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design adelaide", "graphic design agency adelaide", "graphic design company adelaide"],
};

export default function GraphicDesignInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
