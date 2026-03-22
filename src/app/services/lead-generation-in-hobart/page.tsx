import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Hobart | TML Agency",
  description: "TML offers expert lead generation services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation hobart", "lead generation agency hobart", "lead generation company hobart"],
};

export default function LeadGenerationInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
