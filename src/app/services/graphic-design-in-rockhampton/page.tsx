import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Rockhampton | TML Agency",
  description: "TML offers expert graphic design services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design rockhampton", "graphic design agency rockhampton", "graphic design company rockhampton"],
};

export default function GraphicDesignInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
