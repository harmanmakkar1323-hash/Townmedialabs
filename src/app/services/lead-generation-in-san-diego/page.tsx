import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Diego | TML Agency",
  description: "TML offers expert lead generation services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation san diego", "lead generation agency san diego", "lead generation company san diego"],
};

export default function LeadGenerationInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
