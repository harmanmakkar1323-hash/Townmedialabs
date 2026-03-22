import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Hamilton | TML Agency",
  description: "TML offers expert graphic design services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design hamilton", "graphic design agency hamilton", "graphic design hamilton nz"],
};

export default function GraphicDesignInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
