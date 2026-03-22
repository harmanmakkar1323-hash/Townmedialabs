import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Panchkula | TML Agency",
  description: "TML offers expert graphic design services in Panchkula. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design panchkula", "graphic design agency panchkula", "graphic design company panchkula"],
};

export default function GraphicdesignInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
