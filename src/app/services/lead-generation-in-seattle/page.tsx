import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Seattle | TML Agency",
  description: "TML offers expert lead generation services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation seattle", "lead generation agency seattle", "lead generation company seattle"],
};

export default function LeadGenerationInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
