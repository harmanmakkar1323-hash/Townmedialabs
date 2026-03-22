import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Manchester | TML Agency",
  description: "TML offers expert lead generation services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation manchester", "lead generation agency manchester", "lead generation company manchester"],
};

export default function LeadGenerationInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
