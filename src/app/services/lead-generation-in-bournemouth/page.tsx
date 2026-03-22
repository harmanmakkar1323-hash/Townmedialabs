import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bournemouth | TML Agency",
  description: "TML offers expert lead generation services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation bournemouth", "lead generation agency bournemouth", "lead generation company bournemouth"],
};

export default function LeadGenerationInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
