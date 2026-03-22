import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Reading | TML Agency",
  description: "TML offers expert graphic design services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design reading", "graphic design agency reading", "graphic design company reading"],
};

export default function GraphicDesignInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
