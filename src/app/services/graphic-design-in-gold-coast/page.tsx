import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Gold Coast | TML Agency",
  description: "TML offers expert graphic design services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design gold coast", "graphic design agency gold coast", "graphic design company gold coast"],
};

export default function GraphicDesignInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
