import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Hamilton | TML Agency",
  description: "TML offers expert lead generation services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation hamilton", "lead generation agency hamilton", "lead generation hamilton nz"],
};

export default function LeadGenerationInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
