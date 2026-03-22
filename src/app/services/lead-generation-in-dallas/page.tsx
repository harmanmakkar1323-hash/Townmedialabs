import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Dallas | TML Agency",
  description: "TML offers expert lead generation services in Dallas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation dallas", "lead generation agency dallas", "lead generation company dallas"],
};

export default function LeadGenerationInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
