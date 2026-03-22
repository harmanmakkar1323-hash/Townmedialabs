import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Fort Worth | TML Agency",
  description: "TML offers expert lead generation services in Fort Worth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation fort worth", "lead generation agency fort worth", "lead generation company fort worth"],
};

export default function LeadGenerationInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
