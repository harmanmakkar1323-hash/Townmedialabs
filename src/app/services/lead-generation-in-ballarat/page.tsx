import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ballarat | TML Agency",
  description: "TML offers expert lead generation services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation ballarat", "lead generation agency ballarat", "lead generation company ballarat"],
};

export default function LeadGenerationInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
