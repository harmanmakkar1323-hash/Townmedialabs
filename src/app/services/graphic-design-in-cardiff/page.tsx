import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cardiff | TML Agency",
  description: "TML offers expert graphic design services in Cardiff. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design cardiff", "graphic design agency cardiff", "graphic design company cardiff"],
};

export default function GraphicDesignInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
