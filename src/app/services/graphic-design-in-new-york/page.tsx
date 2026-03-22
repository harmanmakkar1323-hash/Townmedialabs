import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in New York | TML Agency",
  description: "TML offers expert graphic design services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design new york", "graphic design agency new york", "graphic design company new york"],
};

export default function GraphicDesignInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
