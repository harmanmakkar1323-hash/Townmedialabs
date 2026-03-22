import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Faridabad | TML Agency",
  description: "TML offers expert graphic design services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design faridabad", "graphic design agency faridabad", "graphic design company faridabad"],
};

export default function GraphicdesignInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
