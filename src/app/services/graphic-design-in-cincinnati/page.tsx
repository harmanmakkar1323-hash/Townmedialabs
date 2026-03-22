import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cincinnati | TML Agency",
  description: "TML offers expert graphic design services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design cincinnati", "graphic design agency cincinnati", "graphic design company cincinnati"],
};

export default function GraphicDesignInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
