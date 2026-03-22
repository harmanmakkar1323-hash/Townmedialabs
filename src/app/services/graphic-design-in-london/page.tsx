import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in London | TML Agency",
  description: "TML offers expert graphic design services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design london", "graphic design agency london", "graphic design company london"],
};

export default function GraphicDesignInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
