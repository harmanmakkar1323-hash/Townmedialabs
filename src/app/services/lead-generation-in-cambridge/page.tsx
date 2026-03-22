import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Cambridge | TML Agency",
  description: "TML offers expert lead generation services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cambridge", "lead generation agency cambridge", "lead generation company cambridge"],
};

export default function LeadGenerationInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
