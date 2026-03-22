import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Cairns | TML Agency",
  description: "TML offers expert lead generation services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cairns", "lead generation agency cairns", "lead generation company cairns"],
};

export default function LeadGenerationInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
