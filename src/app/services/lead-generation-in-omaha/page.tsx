import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Omaha | TML Agency",
  description: "TML offers expert lead generation services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation omaha", "lead generation agency omaha", "lead generation company omaha"],
};

export default function LeadGenerationInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
