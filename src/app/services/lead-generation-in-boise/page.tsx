import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Boise | TML Agency",
  description: "TML offers expert lead generation services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation boise", "lead generation agency boise", "lead generation company boise"],
};

export default function LeadGenerationInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
