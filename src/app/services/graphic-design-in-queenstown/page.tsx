import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Queenstown | TML Agency",
  description: "TML offers expert graphic design services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design queenstown", "graphic design agency queenstown", "graphic design queenstown nz"],
};

export default function GraphicDesignInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
