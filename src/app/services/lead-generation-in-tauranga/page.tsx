import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Tauranga | TML Agency",
  description: "TML offers expert lead generation services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation tauranga", "lead generation agency tauranga", "lead generation tauranga nz"],
};

export default function LeadGenerationInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
