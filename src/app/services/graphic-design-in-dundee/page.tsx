import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Dundee | TML Agency",
  description: "TML offers expert graphic design services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design dundee", "graphic design agency dundee", "graphic design company dundee"],
};

export default function GraphicDesignInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
