import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ahmedabad | TML Agency",
  description: "TML offers expert graphic design services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ahmedabad", "graphic design agency ahmedabad", "graphic design company ahmedabad"],
};

export default function GraphicdesignInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
