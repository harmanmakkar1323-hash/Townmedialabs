import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ajman | TML Agency",
  description: "TML offers expert graphic design services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ajman", "graphic design agency ajman", "graphic design company ajman"],
};

export default function GraphicDesignInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
