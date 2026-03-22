import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Peterborough | TML Agency",
  description: "TML offers expert graphic design services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design peterborough", "graphic design agency peterborough", "graphic design company peterborough"],
};

export default function GraphicDesignInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
