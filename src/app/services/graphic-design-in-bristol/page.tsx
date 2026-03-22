import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bristol | TML Agency",
  description: "TML offers expert graphic design services in Bristol. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design bristol", "graphic design agency bristol", "graphic design company bristol"],
};

export default function GraphicDesignInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
