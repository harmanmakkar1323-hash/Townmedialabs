import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Pittsburgh | TML Agency",
  description: "TML offers expert graphic design services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design pittsburgh", "graphic design agency pittsburgh", "graphic design company pittsburgh"],
};

export default function GraphicDesignInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
