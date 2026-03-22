import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Kolkata | TML Agency",
  description: "TML offers expert graphic design services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design kolkata", "graphic design agency kolkata", "graphic design company kolkata"],
};

export default function GraphicdesignInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
