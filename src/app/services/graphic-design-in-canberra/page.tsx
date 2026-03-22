import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Canberra | TML Agency",
  description: "TML offers expert graphic design services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design canberra", "graphic design agency canberra", "graphic design company canberra"],
};

export default function GraphicDesignInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
