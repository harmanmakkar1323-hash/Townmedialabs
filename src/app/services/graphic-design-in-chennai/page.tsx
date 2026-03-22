import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Chennai | TML Agency",
  description: "TML offers expert graphic design services in Chennai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design chennai", "graphic design agency chennai", "graphic design company chennai"],
};

export default function GraphicdesignInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
