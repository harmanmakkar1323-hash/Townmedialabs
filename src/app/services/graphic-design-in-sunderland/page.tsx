import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sunderland | TML Agency",
  description: "TML offers expert graphic design services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sunderland", "graphic design agency sunderland", "graphic design company sunderland"],
};

export default function GraphicDesignInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
