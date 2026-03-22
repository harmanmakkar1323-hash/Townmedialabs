import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Chicago | TML Agency",
  description: "TML offers expert lead generation services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation chicago", "lead generation agency chicago", "lead generation company chicago"],
};

export default function LeadGenerationInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
