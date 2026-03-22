import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wellington | TML Agency",
  description: "TML offers expert graphic design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design wellington", "graphic design agency wellington", "graphic design wellington nz"],
};

export default function GraphicDesignInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
