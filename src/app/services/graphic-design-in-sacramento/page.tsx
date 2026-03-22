import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sacramento | TML Agency",
  description: "TML offers expert graphic design services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sacramento", "graphic design agency sacramento", "graphic design company sacramento"],
};

export default function GraphicDesignInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
