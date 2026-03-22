import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Louisville | TML Agency",
  description: "TML offers expert lead generation services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation louisville", "lead generation agency louisville", "lead generation company louisville"],
};

export default function LeadGenerationInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
