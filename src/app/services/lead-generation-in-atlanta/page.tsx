import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Atlanta | TML Agency",
  description: "TML offers expert lead generation services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation atlanta", "lead generation agency atlanta", "lead generation company atlanta"],
};

export default function LeadGenerationInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
