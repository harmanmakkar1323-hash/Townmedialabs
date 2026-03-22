import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ballarat | TML Agency",
  description: "TML offers expert graphic design services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ballarat", "graphic design agency ballarat", "graphic design company ballarat"],
};

export default function GraphicDesignInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
