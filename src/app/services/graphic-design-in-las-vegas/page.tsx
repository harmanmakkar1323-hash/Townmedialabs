import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Las Vegas | TML Agency",
  description: "TML offers expert graphic design services in Las Vegas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design las vegas", "graphic design agency las vegas", "graphic design company las vegas"],
};

export default function GraphicDesignInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
