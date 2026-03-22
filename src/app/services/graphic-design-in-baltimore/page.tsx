import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Baltimore | TML Agency",
  description: "TML offers expert graphic design services in Baltimore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design baltimore", "graphic design agency baltimore", "graphic design company baltimore"],
};

export default function GraphicDesignInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
