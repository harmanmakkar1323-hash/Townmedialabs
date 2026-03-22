import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Portland | TML Agency",
  description: "TML offers expert graphic design services in Portland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design portland", "graphic design agency portland", "graphic design company portland"],
};

export default function GraphicDesignInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
