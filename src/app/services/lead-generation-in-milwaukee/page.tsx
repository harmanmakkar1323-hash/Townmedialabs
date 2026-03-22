import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Milwaukee | TML Agency",
  description: "TML offers expert lead generation services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation milwaukee", "lead generation agency milwaukee", "lead generation company milwaukee"],
};

export default function LeadGenerationInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
