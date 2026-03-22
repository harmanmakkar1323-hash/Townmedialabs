import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Kochi | TML Agency",
  description: "TML offers expert graphic design services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kochi", "graphic design agency kochi", "graphic design company kochi"],
};

export default function GraphicdesignInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
