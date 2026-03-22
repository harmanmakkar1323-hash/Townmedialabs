import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Phoenix | TML Agency",
  description: "TML offers expert graphic design services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design phoenix", "graphic design agency phoenix", "graphic design company phoenix"],
};

export default function GraphicDesignInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
