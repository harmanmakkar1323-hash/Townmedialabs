import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Aberdeen | TML Agency",
  description: "TML offers expert graphic design services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design aberdeen", "graphic design agency aberdeen", "graphic design company aberdeen"],
};

export default function GraphicDesignInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
