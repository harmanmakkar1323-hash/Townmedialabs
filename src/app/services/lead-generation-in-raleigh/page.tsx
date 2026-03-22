import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Raleigh | TML Agency",
  description: "TML offers expert lead generation services in Raleigh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation raleigh", "lead generation agency raleigh", "lead generation company raleigh"],
};

export default function LeadGenerationInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
