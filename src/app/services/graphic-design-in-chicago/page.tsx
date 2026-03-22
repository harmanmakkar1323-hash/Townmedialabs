import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Chicago | TML Agency",
  description: "TML offers expert graphic design services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design chicago", "graphic design agency chicago", "graphic design company chicago"],
};

export default function GraphicDesignInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
