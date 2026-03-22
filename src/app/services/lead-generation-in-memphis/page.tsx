import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Memphis | TML Agency",
  description: "TML offers expert lead generation services in Memphis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation memphis", "lead generation agency memphis", "lead generation company memphis"],
};

export default function LeadGenerationInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
