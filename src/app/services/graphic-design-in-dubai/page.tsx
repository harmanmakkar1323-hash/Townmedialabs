import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Dubai | TML Agency",
  description: "TML offers expert graphic design services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design dubai", "graphic design agency dubai", "graphic design company dubai"],
};

export default function GraphicDesignInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
