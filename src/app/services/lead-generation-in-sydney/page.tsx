import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sydney | TML Agency",
  description: "TML offers expert lead generation services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sydney", "lead generation agency sydney", "lead generation company sydney"],
};

export default function LeadGenerationInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
