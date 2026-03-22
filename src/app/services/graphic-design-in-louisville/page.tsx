import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Louisville | TML Agency",
  description: "TML offers expert graphic design services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design louisville", "graphic design agency louisville", "graphic design company louisville"],
};

export default function GraphicDesignInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
