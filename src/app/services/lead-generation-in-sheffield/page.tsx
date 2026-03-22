import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sheffield | TML Agency",
  description: "TML offers expert lead generation services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sheffield", "lead generation agency sheffield", "lead generation company sheffield"],
};

export default function LeadGenerationInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
