import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Omaha | TML Agency",
  description: "TML offers expert graphic design services in Omaha. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design omaha", "graphic design agency omaha", "graphic design company omaha"],
};

export default function GraphicDesignInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
