import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Norwich | TML Agency",
  description: "TML offers expert graphic design services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design norwich", "graphic design agency norwich", "graphic design company norwich"],
};

export default function GraphicDesignInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
