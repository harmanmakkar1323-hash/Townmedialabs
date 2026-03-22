import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bournemouth | TML Agency",
  description: "TML offers expert graphic design services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bournemouth", "graphic design agency bournemouth", "graphic design company bournemouth"],
};

export default function GraphicDesignInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
