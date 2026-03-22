import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Tampa | TML Agency",
  description: "TML offers expert lead generation services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation tampa", "lead generation agency tampa", "lead generation company tampa"],
};

export default function LeadGenerationInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
