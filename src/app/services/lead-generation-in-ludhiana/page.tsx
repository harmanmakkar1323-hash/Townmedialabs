import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ludhiana | TML Agency",
  description: "TML offers expert lead generation services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation ludhiana", "lead generation agency ludhiana", "lead generation company ludhiana"],
};

export default function LeadGenerationInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
