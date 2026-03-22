import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Nashville | TML Agency",
  description: "TML offers expert graphic design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design nashville", "graphic design agency nashville", "graphic design company nashville"],
};

export default function GraphicDesignInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
