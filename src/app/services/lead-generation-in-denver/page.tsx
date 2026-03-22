import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Denver | TML Agency",
  description: "TML offers expert lead generation services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation denver", "lead generation agency denver", "lead generation company denver"],
};

export default function LeadGenerationInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
