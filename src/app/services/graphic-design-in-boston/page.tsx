import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Boston | TML Agency",
  description: "TML offers expert graphic design services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design boston", "graphic design agency boston", "graphic design company boston"],
};

export default function GraphicDesignInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
