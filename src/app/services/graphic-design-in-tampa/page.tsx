import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Tampa | TML Agency",
  description: "TML offers expert graphic design services in Tampa. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design tampa", "graphic design agency tampa", "graphic design company tampa"],
};

export default function GraphicDesignInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
