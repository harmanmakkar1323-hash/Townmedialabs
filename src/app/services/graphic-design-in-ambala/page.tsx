import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ambala | TML Agency",
  description: "TML offers expert graphic design services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ambala", "graphic design agency ambala", "graphic design company ambala"],
};

export default function GraphicdesignInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
