import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Mumbai | TML Agency",
  description: "TML offers expert graphic design services in Mumbai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design mumbai", "graphic design agency mumbai", "graphic design company mumbai"],
};

export default function GraphicDesignInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
