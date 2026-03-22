import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in York | TML Agency",
  description: "TML offers expert graphic design services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design york", "graphic design agency york", "graphic design company york"],
};

export default function GraphicDesignInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
