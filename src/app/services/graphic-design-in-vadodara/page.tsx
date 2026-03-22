import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Vadodara | TML Agency",
  description: "TML offers expert graphic design services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design vadodara", "graphic design agency vadodara", "graphic design company vadodara"],
};

export default function GraphicdesignInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
