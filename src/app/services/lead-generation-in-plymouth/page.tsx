import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Plymouth | TML Agency",
  description: "TML offers expert lead generation services in Plymouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation plymouth", "lead generation agency plymouth", "lead generation company plymouth"],
};

export default function LeadGenerationInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
