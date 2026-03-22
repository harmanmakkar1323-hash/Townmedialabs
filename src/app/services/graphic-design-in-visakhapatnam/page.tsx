import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert graphic design services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design visakhapatnam", "graphic design agency visakhapatnam", "graphic design company visakhapatnam"],
};

export default function GraphicdesignInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
