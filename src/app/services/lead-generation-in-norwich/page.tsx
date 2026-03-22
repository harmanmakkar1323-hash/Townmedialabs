import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Norwich | TML Agency",
  description: "TML offers expert lead generation services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation norwich", "lead generation agency norwich", "lead generation company norwich"],
};

export default function LeadGenerationInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
