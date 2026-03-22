import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wollongong | TML Agency",
  description: "TML offers expert graphic design services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design wollongong", "graphic design agency wollongong", "graphic design company wollongong"],
};

export default function GraphicDesignInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
