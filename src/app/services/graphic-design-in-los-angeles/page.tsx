import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Los Angeles | TML Agency",
  description: "TML offers expert graphic design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design los angeles", "graphic design agency los angeles", "graphic design company los angeles"],
};

export default function GraphicDesignInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
