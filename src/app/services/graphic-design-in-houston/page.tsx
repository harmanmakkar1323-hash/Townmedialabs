import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Houston | TML Agency",
  description: "TML offers expert graphic design services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design houston", "graphic design agency houston", "graphic design company houston"],
};

export default function GraphicDesignInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
