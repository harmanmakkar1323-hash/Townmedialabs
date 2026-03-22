import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Wellington | TML Agency",
  description: "TML offers expert lead generation services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation wellington", "lead generation agency wellington", "lead generation wellington nz"],
};

export default function LeadGenerationInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
