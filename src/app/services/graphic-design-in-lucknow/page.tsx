import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Lucknow | TML Agency",
  description: "TML offers expert graphic design services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design lucknow", "graphic design agency lucknow", "graphic design company lucknow"],
};

export default function GraphicdesignInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
