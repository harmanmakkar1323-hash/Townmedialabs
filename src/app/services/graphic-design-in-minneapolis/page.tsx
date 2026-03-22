import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Minneapolis | TML Agency",
  description: "TML offers expert graphic design services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design minneapolis", "graphic design agency minneapolis", "graphic design company minneapolis"],
};

export default function GraphicDesignInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
