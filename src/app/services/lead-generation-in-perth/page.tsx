import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Perth | TML Agency",
  description: "TML offers expert lead generation services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation perth", "lead generation agency perth", "lead generation company perth"],
};

export default function LeadGenerationInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
