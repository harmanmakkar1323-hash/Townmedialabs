import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in San Diego | TML Agency",
  description: "TML offers expert graphic design services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design san diego", "graphic design agency san diego", "graphic design company san diego"],
};

export default function GraphicDesignInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
