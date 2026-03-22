import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Preston | TML Agency",
  description: "TML offers expert graphic design services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design preston", "graphic design agency preston", "graphic design company preston"],
};

export default function GraphicDesignInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
