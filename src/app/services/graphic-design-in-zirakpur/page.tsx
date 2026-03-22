import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Zirakpur | TML Agency",
  description: "TML offers expert graphic design services in Zirakpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design zirakpur", "graphic design agency zirakpur", "graphic design company zirakpur"],
};

export default function GraphicDesignInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
