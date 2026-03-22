import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Miami | TML Agency",
  description: "TML offers expert graphic design services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design miami", "graphic design agency miami", "graphic design company miami"],
};

export default function GraphicDesignInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
