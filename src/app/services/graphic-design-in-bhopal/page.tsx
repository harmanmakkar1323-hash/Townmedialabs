import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bhopal | TML Agency",
  description: "TML offers expert graphic design services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bhopal", "graphic design agency bhopal", "graphic design company bhopal"],
};

export default function GraphicdesignInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
