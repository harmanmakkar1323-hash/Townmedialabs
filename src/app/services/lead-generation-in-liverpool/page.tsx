import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Liverpool | TML Agency",
  description: "TML offers expert lead generation services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation liverpool", "lead generation agency liverpool", "lead generation company liverpool"],
};

export default function LeadGenerationInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
