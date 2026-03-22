import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Cardiff | TML Agency",
  description: "TML offers expert lead generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cardiff", "lead generation agency cardiff", "lead generation company cardiff"],
};

export default function LeadGenerationInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
