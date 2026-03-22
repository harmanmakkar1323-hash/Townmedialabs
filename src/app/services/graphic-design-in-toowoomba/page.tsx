import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Toowoomba | TML Agency",
  description: "TML offers expert graphic design services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design toowoomba", "graphic design agency toowoomba", "graphic design company toowoomba"],
};

export default function GraphicDesignInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
