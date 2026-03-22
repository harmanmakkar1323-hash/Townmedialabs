import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Swansea | TML Agency",
  description: "TML offers expert graphic design services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design swansea", "graphic design agency swansea", "graphic design company swansea"],
};

export default function GraphicDesignInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
