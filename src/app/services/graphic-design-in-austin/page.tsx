import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Austin | TML Agency",
  description: "TML offers expert graphic design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design austin", "graphic design agency austin", "graphic design company austin"],
};

export default function GraphicDesignInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
