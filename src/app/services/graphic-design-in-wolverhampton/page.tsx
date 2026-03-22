import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wolverhampton | TML Agency",
  description: "TML offers expert graphic design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design wolverhampton", "graphic design agency wolverhampton", "graphic design company wolverhampton"],
};

export default function GraphicDesignInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
