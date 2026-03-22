import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Rajkot | TML Agency",
  description: "TML offers expert graphic design services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design rajkot", "graphic design agency rajkot", "graphic design company rajkot"],
};

export default function GraphicdesignInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
