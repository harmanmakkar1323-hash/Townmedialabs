import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Boise | TML Agency",
  description: "TML offers expert graphic design services in Boise. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design boise", "graphic design agency boise", "graphic design company boise"],
};

export default function GraphicDesignInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
