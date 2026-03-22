import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Mumbai | TML Agency",
  description: "TML offers expert lead generation services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation mumbai", "lead generation agency mumbai", "lead generation company mumbai"],
};

export default function LeadGenerationInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
