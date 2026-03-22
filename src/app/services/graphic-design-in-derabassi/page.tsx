import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Derabassi | TML Agency",
  description: "TML offers expert graphic design services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design derabassi", "graphic design agency derabassi", "graphic design company derabassi"],
};

export default function GraphicdesignInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
