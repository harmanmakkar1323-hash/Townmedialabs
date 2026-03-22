import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Fort Worth | TML Agency",
  description: "TML offers expert graphic design services in Fort Worth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design fort worth", "graphic design agency fort worth", "graphic design company fort worth"],
};

export default function GraphicDesignInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
