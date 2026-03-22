import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert graphic design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sunshine coast", "graphic design agency sunshine coast", "graphic design company sunshine coast"],
};

export default function GraphicDesignInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
