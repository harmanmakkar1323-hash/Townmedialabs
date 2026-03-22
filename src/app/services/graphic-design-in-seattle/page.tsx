import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Seattle | TML Agency",
  description: "TML offers expert graphic design services in Seattle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design seattle", "graphic design agency seattle", "graphic design company seattle"],
};

export default function GraphicDesignInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
