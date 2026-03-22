import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Antonio | TML Agency",
  description: "TML offers expert lead generation services in San Antonio. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation san antonio", "lead generation agency san antonio", "lead generation company san antonio"],
};

export default function LeadGenerationInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
