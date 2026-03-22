import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Napier | TML Agency",
  description: "TML offers expert graphic design services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design napier", "graphic design agency napier", "graphic design napier nz"],
};

export default function GraphicDesignInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
