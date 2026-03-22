import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in New York | TML Agency",
  description: "TML offers expert lead generation services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation new york", "lead generation agency new york", "lead generation company new york"],
};

export default function LeadGenerationInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
