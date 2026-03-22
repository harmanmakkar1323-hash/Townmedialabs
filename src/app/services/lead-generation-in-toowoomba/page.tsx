import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Toowoomba | TML Agency",
  description: "TML offers expert lead generation services in Toowoomba. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation toowoomba", "lead generation agency toowoomba", "lead generation company toowoomba"],
};

export default function LeadGenerationInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
