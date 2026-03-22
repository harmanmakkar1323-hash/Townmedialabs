import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Pune | TML Agency",
  description: "TML offers expert graphic design services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design pune", "graphic design agency pune", "graphic design company pune"],
};

export default function GraphicdesignInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
