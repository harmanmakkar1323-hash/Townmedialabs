import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Manchester | TML Agency",
  description: "TML offers expert graphic design services in Manchester. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design manchester", "graphic design agency manchester", "graphic design company manchester"],
};

export default function GraphicDesignInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
