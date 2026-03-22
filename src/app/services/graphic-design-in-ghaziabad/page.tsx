import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ghaziabad | TML Agency",
  description: "TML offers expert graphic design services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design ghaziabad", "graphic design agency ghaziabad", "graphic design company ghaziabad"],
};

export default function GraphicdesignInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
