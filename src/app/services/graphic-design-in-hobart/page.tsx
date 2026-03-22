import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Hobart | TML Agency",
  description: "TML offers expert graphic design services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design hobart", "graphic design agency hobart", "graphic design company hobart"],
};

export default function GraphicDesignInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
