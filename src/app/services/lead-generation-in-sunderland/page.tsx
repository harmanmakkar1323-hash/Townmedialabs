import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sunderland | TML Agency",
  description: "TML offers expert lead generation services in Sunderland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation sunderland", "lead generation agency sunderland", "lead generation company sunderland"],
};

export default function LeadGenerationInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
