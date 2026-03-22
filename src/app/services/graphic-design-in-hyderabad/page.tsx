import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Hyderabad | TML Agency",
  description: "TML offers expert graphic design services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design hyderabad", "graphic design agency hyderabad", "graphic design company hyderabad"],
};

export default function GraphicdesignInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
