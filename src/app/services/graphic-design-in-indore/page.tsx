import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Indore | TML Agency",
  description: "TML offers expert graphic design services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design indore", "graphic design agency indore", "graphic design company indore"],
};

export default function GraphicdesignInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
