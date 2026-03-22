import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in San Antonio | TML Agency",
  description: "TML offers expert graphic design services in San Antonio. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design san antonio", "graphic design agency san antonio", "graphic design company san antonio"],
};

export default function GraphicDesignInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
