import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cheltenham | TML Agency",
  description: "TML offers expert graphic design services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design cheltenham", "graphic design agency cheltenham", "graphic design company cheltenham"],
};

export default function GraphicDesignInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
