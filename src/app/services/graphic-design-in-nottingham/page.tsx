import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Nottingham | TML Agency",
  description: "TML offers expert graphic design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design nottingham", "graphic design agency nottingham", "graphic design company nottingham"],
};

export default function GraphicDesignInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
