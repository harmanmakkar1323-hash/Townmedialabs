import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Salt Lake City | TML Agency",
  description: "TML offers expert graphic design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design salt lake city", "graphic design agency salt lake city", "graphic design company salt lake city"],
};

export default function GraphicDesignInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
