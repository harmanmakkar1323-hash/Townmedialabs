import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Auckland | TML Agency",
  description: "TML offers expert graphic design services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design auckland", "graphic design agency auckland", "graphic design company auckland"],
};

export default function GraphicDesignInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
