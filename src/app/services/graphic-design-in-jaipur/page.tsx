import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Jaipur | TML Agency",
  description: "TML offers expert graphic design services in Jaipur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design jaipur", "graphic design agency jaipur", "graphic design company jaipur"],
};

export default function GraphicdesignInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
