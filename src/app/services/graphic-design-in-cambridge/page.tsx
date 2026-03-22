import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cambridge | TML Agency",
  description: "TML offers expert graphic design services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design cambridge", "graphic design agency cambridge", "graphic design company cambridge"],
};

export default function GraphicDesignInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
