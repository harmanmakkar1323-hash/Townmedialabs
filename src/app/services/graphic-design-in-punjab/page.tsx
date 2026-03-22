import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Punjab | TML Agency",
  description: "TML offers expert graphic design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design punjab", "graphic design agency punjab", "graphic design company punjab"],
};

export default function GraphicDesignInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
