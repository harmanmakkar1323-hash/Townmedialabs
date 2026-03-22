import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bathinda | TML Agency",
  description: "TML offers expert graphic design services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design bathinda", "graphic design agency bathinda", "graphic design company bathinda"],
};

export default function GraphicDesignInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
