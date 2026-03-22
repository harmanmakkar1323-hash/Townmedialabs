import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Boston | TML Agency",
  description: "TML offers expert lead generation services in Boston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation boston", "lead generation agency boston", "lead generation company boston"],
};

export default function LeadGenerationInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
