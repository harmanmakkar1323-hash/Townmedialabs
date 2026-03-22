import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Brisbane | TML Agency",
  description: "TML offers expert lead generation services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation brisbane", "lead generation agency brisbane", "lead generation company brisbane"],
};

export default function LeadGenerationInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
