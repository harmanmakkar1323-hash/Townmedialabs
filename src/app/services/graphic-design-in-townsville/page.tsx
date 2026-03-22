import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Townsville | TML Agency",
  description: "TML offers expert graphic design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design townsville", "graphic design agency townsville", "graphic design company townsville"],
};

export default function GraphicDesignInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
