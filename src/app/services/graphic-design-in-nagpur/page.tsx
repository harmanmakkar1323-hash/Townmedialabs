import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Nagpur | TML Agency",
  description: "TML offers expert graphic design services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design nagpur", "graphic design agency nagpur", "graphic design company nagpur"],
};

export default function GraphicdesignInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
