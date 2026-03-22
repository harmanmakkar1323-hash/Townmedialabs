import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Detroit | TML Agency",
  description: "TML offers expert lead generation services in Detroit. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation detroit", "lead generation agency detroit", "lead generation company detroit"],
};

export default function LeadGenerationInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
