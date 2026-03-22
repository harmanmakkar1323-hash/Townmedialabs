import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Virginia Beach | TML Agency",
  description: "TML offers expert lead generation services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation virginia beach", "lead generation agency virginia beach", "lead generation company virginia beach"],
};

export default function LeadGenerationInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
