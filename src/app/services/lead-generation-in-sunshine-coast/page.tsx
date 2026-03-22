import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert lead generation services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sunshine coast", "lead generation agency sunshine coast", "lead generation company sunshine coast"],
};

export default function LeadGenerationInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
