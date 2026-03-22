import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Christchurch | TML Agency",
  description: "TML offers expert lead generation services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation christchurch", "lead generation agency christchurch", "lead generation christchurch nz"],
};

export default function LeadGenerationInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
