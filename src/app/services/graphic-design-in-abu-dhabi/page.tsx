import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert graphic design services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design abu dhabi", "graphic design agency abu dhabi", "graphic design company abu dhabi"],
};

export default function GraphicDesignInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
