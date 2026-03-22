import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Melbourne | TML Agency",
  description: "TML offers expert lead generation services in Melbourne. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation melbourne", "lead generation agency melbourne", "lead generation company melbourne"],
};

export default function LeadGenerationInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
