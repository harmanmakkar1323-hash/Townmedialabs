import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Leicester | TML Agency",
  description: "TML offers expert graphic design services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design leicester", "graphic design agency leicester", "graphic design company leicester"],
};

export default function GraphicDesignInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
