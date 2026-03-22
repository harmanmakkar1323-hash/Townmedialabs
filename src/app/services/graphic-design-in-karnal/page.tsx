import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Karnal | TML Agency",
  description: "TML offers expert graphic design services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design karnal", "graphic design agency karnal", "graphic design company karnal"],
};

export default function GraphicdesignInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
