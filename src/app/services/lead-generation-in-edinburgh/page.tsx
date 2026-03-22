import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Edinburgh | TML Agency",
  description: "TML offers expert lead generation services in Edinburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation edinburgh", "lead generation agency edinburgh", "lead generation company edinburgh"],
};

export default function LeadGenerationInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
