import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Coimbatore | TML Agency",
  description: "TML offers expert graphic design services in Coimbatore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design coimbatore", "graphic design agency coimbatore", "graphic design company coimbatore"],
};

export default function GraphicdesignInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
