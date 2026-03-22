import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Middlesbrough | TML Agency",
  description: "TML offers expert lead generation services in Middlesbrough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation middlesbrough", "lead generation agency middlesbrough", "lead generation company middlesbrough"],
};

export default function LeadGenerationInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
