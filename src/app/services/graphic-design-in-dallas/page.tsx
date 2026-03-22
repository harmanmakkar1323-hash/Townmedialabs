import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Dallas | TML Agency",
  description: "TML offers expert graphic design services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design dallas", "graphic design agency dallas", "graphic design company dallas"],
};

export default function GraphicDesignInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
