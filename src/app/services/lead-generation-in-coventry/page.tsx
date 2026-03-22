import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Coventry | TML Agency",
  description: "TML offers expert lead generation services in Coventry. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation coventry", "lead generation agency coventry", "lead generation company coventry"],
};

export default function LeadGenerationInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
