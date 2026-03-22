import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sydney | TML Agency",
  description: "TML offers expert graphic design services in Sydney. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design sydney", "graphic design agency sydney", "graphic design company sydney"],
};

export default function GraphicDesignInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
