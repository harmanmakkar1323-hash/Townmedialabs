import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Houston | TML Agency",
  description: "TML offers expert lead generation services in Houston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation houston", "lead generation agency houston", "lead generation company houston"],
};

export default function LeadGenerationInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
