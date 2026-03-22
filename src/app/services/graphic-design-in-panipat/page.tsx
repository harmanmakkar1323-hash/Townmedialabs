import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Panipat | TML Agency",
  description: "TML offers expert graphic design services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design panipat", "graphic design agency panipat", "graphic design company panipat"],
};

export default function GraphicdesignInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
