import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Newcastle | TML Agency",
  description: "TML offers expert graphic design services in Newcastle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design newcastle", "graphic design agency newcastle", "graphic design company newcastle"],
};

export default function GraphicDesignInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
