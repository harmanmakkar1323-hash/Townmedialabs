import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Al Ain | TML Agency",
  description: "TML offers expert graphic design services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design al ain", "graphic design agency al ain", "graphic design company al ain"],
};

export default function GraphicDesignInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
