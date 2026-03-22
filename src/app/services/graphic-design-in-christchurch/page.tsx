import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Christchurch | TML Agency",
  description: "TML offers expert graphic design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design christchurch", "graphic design agency christchurch", "graphic design christchurch nz"],
};

export default function GraphicDesignInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
