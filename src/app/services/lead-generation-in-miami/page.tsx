import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Miami | TML Agency",
  description: "TML offers expert lead generation services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation miami", "lead generation agency miami", "lead generation company miami"],
};

export default function LeadGenerationInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
