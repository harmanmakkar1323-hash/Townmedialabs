import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Amritsar | TML Agency",
  description: "TML offers expert graphic design services in Amritsar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design amritsar", "graphic design agency amritsar", "graphic design company amritsar"],
};

export default function GraphicdesignInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
