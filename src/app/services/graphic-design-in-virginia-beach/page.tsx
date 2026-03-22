import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Virginia Beach | TML Agency",
  description: "TML offers expert graphic design services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design virginia beach", "graphic design agency virginia beach", "graphic design company virginia beach"],
};

export default function GraphicDesignInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
