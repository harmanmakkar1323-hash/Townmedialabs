import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Patiala | TML Agency",
  description: "TML offers expert graphic design services in Patiala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design patiala", "graphic design agency patiala", "graphic design company patiala"],
};

export default function GraphicdesignInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
