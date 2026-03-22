import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Mohali | TML Agency",
  description: "TML offers expert graphic design services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design mohali", "graphic design agency mohali", "graphic design company mohali"],
};

export default function GraphicdesignInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
