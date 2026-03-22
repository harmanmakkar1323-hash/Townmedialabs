import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ajman | TML Agency",
  description: "TML offers expert lead generation services in Ajman. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation ajman", "lead generation agency ajman", "lead generation company ajman"],
};

export default function LeadGenerationInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
