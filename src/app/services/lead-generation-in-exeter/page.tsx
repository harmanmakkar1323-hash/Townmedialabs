import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Exeter | TML Agency",
  description: "TML offers expert lead generation services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation exeter", "lead generation agency exeter", "lead generation company exeter"],
};

export default function LeadGenerationInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
