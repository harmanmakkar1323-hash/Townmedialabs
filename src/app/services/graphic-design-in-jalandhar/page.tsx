import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Jalandhar | TML Agency",
  description: "TML offers expert graphic design services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design jalandhar", "graphic design agency jalandhar", "graphic design company jalandhar"],
};

export default function GraphicdesignInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
