import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Richmond | TML Agency",
  description: "TML offers expert lead generation services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation richmond", "lead generation agency richmond", "lead generation company richmond"],
};

export default function LeadGenerationInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
