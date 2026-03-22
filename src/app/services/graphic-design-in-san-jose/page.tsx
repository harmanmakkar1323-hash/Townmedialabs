import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in San Jose | TML Agency",
  description: "TML offers expert graphic design services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design san jose", "graphic design agency san jose", "graphic design company san jose"],
};

export default function GraphicDesignInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
