import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Gurgaon | TML Agency",
  description: "TML offers expert graphic design services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design gurgaon", "graphic design agency gurgaon", "graphic design company gurgaon"],
};

export default function GraphicdesignInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
