import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Edmonton | TML Agency",
  description: "TML offers expert graphic design services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design edmonton", "graphic design agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
