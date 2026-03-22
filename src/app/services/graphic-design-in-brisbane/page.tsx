import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Brisbane | TML Agency",
  description: "TML offers expert graphic design services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design brisbane", "graphic design agency brisbane", "graphic design company brisbane"],
};

export default function GraphicDesignInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
