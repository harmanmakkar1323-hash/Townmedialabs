import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Charlotte | TML Agency",
  description: "TML offers expert graphic design services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design charlotte", "graphic design agency charlotte", "graphic design company charlotte"],
};

export default function GraphicDesignInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
