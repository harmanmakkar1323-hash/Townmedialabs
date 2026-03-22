import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sacramento | TML Agency",
  description: "TML offers expert lead generation services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sacramento", "lead generation agency sacramento", "lead generation company sacramento"],
};

export default function LeadGenerationInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
