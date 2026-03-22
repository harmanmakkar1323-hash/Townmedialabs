import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bath | TML Agency",
  description: "TML offers expert lead generation services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation bath", "lead generation agency bath", "lead generation company bath"],
};

export default function LeadGenerationInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
