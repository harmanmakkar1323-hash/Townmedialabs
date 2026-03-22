import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Calgary | TML Agency",
  description: "TML offers expert graphic design services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design calgary", "graphic design agency calgary"],
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
