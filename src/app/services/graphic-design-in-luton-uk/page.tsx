import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Luton | TML Agency",
  description: "TML offers expert graphic design services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design luton", "graphic design agency luton", "graphic design company luton"],
};

export default function GraphicDesignInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
