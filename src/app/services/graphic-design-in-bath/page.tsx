import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bath | TML Agency",
  description: "TML offers expert graphic design services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design bath", "graphic design agency bath", "graphic design company bath"],
};

export default function GraphicDesignInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
