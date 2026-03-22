import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Detroit | TML Agency",
  description: "TML offers expert graphic design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design detroit", "graphic design agency detroit", "graphic design company detroit"],
};

export default function GraphicDesignInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
