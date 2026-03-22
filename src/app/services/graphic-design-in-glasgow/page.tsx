import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Glasgow | TML Agency",
  description: "TML offers expert graphic design services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design glasgow", "graphic design agency glasgow", "graphic design company glasgow"],
};

export default function GraphicDesignInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
