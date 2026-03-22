import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Jacksonville | TML Agency",
  description: "TML offers expert graphic design services in Jacksonville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design jacksonville", "graphic design agency jacksonville", "graphic design company jacksonville"],
};

export default function GraphicDesignInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
