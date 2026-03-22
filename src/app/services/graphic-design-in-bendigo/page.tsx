import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bendigo | TML Agency",
  description: "TML offers expert graphic design services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bendigo", "graphic design agency bendigo", "graphic design company bendigo"],
};

export default function GraphicDesignInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
