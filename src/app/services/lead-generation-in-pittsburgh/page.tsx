import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Pittsburgh | TML Agency",
  description: "TML offers expert lead generation services in Pittsburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation pittsburgh", "lead generation agency pittsburgh", "lead generation company pittsburgh"],
};

export default function LeadGenerationInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
