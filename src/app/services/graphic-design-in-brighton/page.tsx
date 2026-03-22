import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Brighton | TML Agency",
  description: "TML offers expert graphic design services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design brighton", "graphic design agency brighton", "graphic design company brighton"],
};

export default function GraphicDesignInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
