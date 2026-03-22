import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Dunedin | TML Agency",
  description: "TML offers expert lead generation services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation dunedin", "lead generation agency dunedin", "lead generation dunedin nz"],
};

export default function LeadGenerationInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
