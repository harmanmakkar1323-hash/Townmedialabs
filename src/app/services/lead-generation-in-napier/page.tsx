import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Napier | TML Agency",
  description: "TML offers expert lead generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation napier", "lead generation agency napier", "lead generation napier nz"],
};

export default function LeadGenerationInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
