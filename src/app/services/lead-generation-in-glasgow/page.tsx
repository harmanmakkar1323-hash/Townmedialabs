import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Glasgow | TML Agency",
  description: "TML offers expert lead generation services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation glasgow", "lead generation agency glasgow", "lead generation company glasgow"],
};

export default function LeadGenerationInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
