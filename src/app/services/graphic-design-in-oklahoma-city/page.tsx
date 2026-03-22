import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Oklahoma City | TML Agency",
  description: "TML offers expert graphic design services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design oklahoma city", "graphic design agency oklahoma city", "graphic design company oklahoma city"],
};

export default function GraphicDesignInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
