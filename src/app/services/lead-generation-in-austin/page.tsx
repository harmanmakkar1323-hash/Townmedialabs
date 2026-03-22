import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Austin | TML Agency",
  description: "TML offers expert lead generation services in Austin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation austin", "lead generation agency austin", "lead generation company austin"],
};

export default function LeadGenerationInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
