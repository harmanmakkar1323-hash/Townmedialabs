import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Raleigh | TML Agency",
  description: "TML offers expert graphic design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design raleigh", "graphic design agency raleigh", "graphic design company raleigh"],
};

export default function GraphicDesignInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
