import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Dubai | TML Agency",
  description: "TML offers expert lead generation services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation dubai", "lead generation agency dubai", "lead generation company dubai"],
};

export default function LeadGenerationInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
