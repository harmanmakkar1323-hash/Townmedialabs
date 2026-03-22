import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sheffield | TML Agency",
  description: "TML offers expert graphic design services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sheffield", "graphic design agency sheffield", "graphic design company sheffield"],
};

export default function GraphicDesignInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
