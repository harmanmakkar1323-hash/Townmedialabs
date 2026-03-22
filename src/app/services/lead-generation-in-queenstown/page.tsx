import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Queenstown | TML Agency",
  description: "TML offers expert lead generation services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation queenstown", "lead generation agency queenstown", "lead generation queenstown nz"],
};

export default function LeadGenerationInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
