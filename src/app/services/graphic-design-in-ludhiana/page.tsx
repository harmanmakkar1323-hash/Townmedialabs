import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ludhiana | TML Agency",
  description: "TML offers expert graphic design services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design ludhiana", "graphic design agency ludhiana", "graphic design company ludhiana"],
};

export default function GraphicDesignInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
