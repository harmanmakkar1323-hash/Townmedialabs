import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert lead generation services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation abu dhabi", "lead generation agency abu dhabi", "lead generation company abu dhabi"],
};

export default function LeadGenerationInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
