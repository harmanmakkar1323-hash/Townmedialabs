import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Plymouth | TML Agency",
  description: "TML offers expert graphic design services in Plymouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design plymouth", "graphic design agency plymouth", "graphic design company plymouth"],
};

export default function GraphicDesignInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
