import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Newcastle | TML Agency",
  description: "TML offers expert lead generation services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation newcastle", "lead generation agency newcastle", "lead generation company newcastle"],
};

export default function LeadGenerationInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
