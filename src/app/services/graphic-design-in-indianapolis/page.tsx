import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Indianapolis | TML Agency",
  description: "TML offers expert graphic design services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design indianapolis", "graphic design agency indianapolis", "graphic design company indianapolis"],
};

export default function GraphicDesignInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
