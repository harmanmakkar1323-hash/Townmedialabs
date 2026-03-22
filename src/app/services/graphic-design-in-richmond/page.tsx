import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Richmond | TML Agency",
  description: "TML offers expert graphic design services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design richmond", "graphic design agency richmond", "graphic design company richmond"],
};

export default function GraphicDesignInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
