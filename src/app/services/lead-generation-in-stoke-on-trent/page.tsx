import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert lead generation services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation stoke-on-trent", "lead generation agency stoke-on-trent", "lead generation company stoke-on-trent"],
};

export default function LeadGenerationInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
