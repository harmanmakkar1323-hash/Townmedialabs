import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Fujairah | TML Agency",
  description: "TML offers expert graphic design services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design fujairah", "graphic design agency fujairah", "graphic design company fujairah"],
};

export default function GraphicDesignInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
