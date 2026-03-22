import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Southampton | TML Agency",
  description: "TML offers expert lead generation services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation southampton", "lead generation agency southampton", "lead generation company southampton"],
};

export default function LeadGenerationInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
