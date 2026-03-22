import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Rockhampton | TML Agency",
  description: "TML offers expert lead generation services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation rockhampton", "lead generation agency rockhampton", "lead generation company rockhampton"],
};

export default function LeadGenerationInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
