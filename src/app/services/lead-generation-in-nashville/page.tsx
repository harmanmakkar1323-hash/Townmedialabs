import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Nashville | TML Agency",
  description: "TML offers expert lead generation services in Nashville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation nashville", "lead generation agency nashville", "lead generation company nashville"],
};

export default function LeadGenerationInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
