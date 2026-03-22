import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Perth | TML Agency",
  description: "TML offers expert graphic design services in Perth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design perth", "graphic design agency perth", "graphic design company perth"],
};

export default function GraphicDesignInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
