import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bristol | TML Agency",
  description: "TML offers expert lead generation services in Bristol. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation bristol", "lead generation agency bristol", "lead generation company bristol"],
};

export default function LeadGenerationInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
