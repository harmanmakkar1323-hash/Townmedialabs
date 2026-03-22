import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Fujairah | TML Agency",
  description: "TML offers expert lead generation services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation fujairah", "lead generation agency fujairah", "lead generation company fujairah"],
};

export default function LeadGenerationInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
