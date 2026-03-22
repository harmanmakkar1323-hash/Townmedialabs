import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Oxford | TML Agency",
  description: "TML offers expert graphic design services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design oxford", "graphic design agency oxford", "graphic design company oxford"],
};

export default function GraphicDesignInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
