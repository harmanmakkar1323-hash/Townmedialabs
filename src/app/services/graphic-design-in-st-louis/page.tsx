import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in St. Louis | TML Agency",
  description: "TML offers expert graphic design services in St. Louis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design st. louis", "graphic design agency st. louis", "graphic design company st. louis"],
};

export default function GraphicDesignInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
