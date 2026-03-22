import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Columbus | TML Agency",
  description: "TML offers expert graphic design services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design columbus", "graphic design agency columbus", "graphic design company columbus"],
};

export default function GraphicDesignInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
