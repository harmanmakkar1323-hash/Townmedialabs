import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Memphis | TML Agency",
  description: "TML offers expert graphic design services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design memphis", "graphic design agency memphis", "graphic design company memphis"],
};

export default function GraphicDesignInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
