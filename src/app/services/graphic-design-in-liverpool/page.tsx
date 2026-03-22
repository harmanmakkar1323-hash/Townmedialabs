import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Liverpool | TML Agency",
  description: "TML offers expert graphic design services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design liverpool", "graphic design agency liverpool", "graphic design company liverpool"],
};

export default function GraphicDesignInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
