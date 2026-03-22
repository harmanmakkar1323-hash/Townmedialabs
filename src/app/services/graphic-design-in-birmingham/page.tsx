import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Birmingham | TML Agency",
  description: "TML offers expert graphic design services in Birmingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design birmingham", "graphic design agency birmingham", "graphic design company birmingham"],
};

export default function GraphicDesignInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
