import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Brighton | TML Agency",
  description: "TML offers expert lead generation services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation brighton", "lead generation agency brighton", "lead generation company brighton"],
};

export default function LeadGenerationInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
