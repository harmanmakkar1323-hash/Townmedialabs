import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Edmonton | TML Agency",
  description: "TML offers expert lead generation services in Edmonton, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation edmonton", "lead generation agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
