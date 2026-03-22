import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Darwin | TML Agency",
  description: "TML offers expert graphic design services in Darwin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design darwin", "graphic design agency darwin", "graphic design company darwin"],
};

export default function GraphicDesignInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
