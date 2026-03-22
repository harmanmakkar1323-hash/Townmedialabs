import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cairns | TML Agency",
  description: "TML offers expert graphic design services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design cairns", "graphic design agency cairns", "graphic design company cairns"],
};

export default function GraphicDesignInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
