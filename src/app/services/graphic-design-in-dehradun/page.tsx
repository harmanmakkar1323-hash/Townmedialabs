import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Dehradun | TML Agency",
  description: "TML offers expert graphic design services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design dehradun", "graphic design agency dehradun", "graphic design company dehradun"],
};

export default function GraphicdesignInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
