import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Charlotte | TML Agency",
  description: "TML offers expert lead generation services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation charlotte", "lead generation agency charlotte", "lead generation company charlotte"],
};

export default function LeadGenerationInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
