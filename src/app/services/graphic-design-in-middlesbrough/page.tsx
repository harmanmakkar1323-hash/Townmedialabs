import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Middlesbrough | TML Agency",
  description: "TML offers expert graphic design services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design middlesbrough", "graphic design agency middlesbrough", "graphic design company middlesbrough"],
};

export default function GraphicDesignInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
