import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Exeter | TML Agency",
  description: "TML offers expert graphic design services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design exeter", "graphic design agency exeter", "graphic design company exeter"],
};

export default function GraphicDesignInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
