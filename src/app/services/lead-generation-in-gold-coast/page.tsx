import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Gold Coast | TML Agency",
  description: "TML offers expert lead generation services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation gold coast", "lead generation agency gold coast", "lead generation company gold coast"],
};

export default function LeadGenerationInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
