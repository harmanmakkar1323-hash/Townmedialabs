import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Noida | TML Agency",
  description: "TML offers expert graphic design services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design noida", "graphic design agency noida", "graphic design company noida"],
};

export default function GraphicdesignInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
