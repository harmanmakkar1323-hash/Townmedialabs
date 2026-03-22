import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Adelaide | TML Agency",
  description: "TML offers expert lead generation services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation adelaide", "lead generation agency adelaide", "lead generation company adelaide"],
};

export default function LeadGenerationInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
