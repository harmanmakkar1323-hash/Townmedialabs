import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Kansas City | TML Agency",
  description: "TML offers expert lead generation services in Kansas City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation kansas city", "lead generation agency kansas city", "lead generation company kansas city"],
};

export default function LeadGenerationInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
