import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Southampton | TML Agency",
  description: "TML offers expert graphic design services in Southampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design southampton", "graphic design agency southampton", "graphic design company southampton"],
};

export default function GraphicDesignInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
