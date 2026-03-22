import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert graphic design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design stoke-on-trent", "graphic design agency stoke-on-trent", "graphic design company stoke-on-trent"],
};

export default function GraphicDesignInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
