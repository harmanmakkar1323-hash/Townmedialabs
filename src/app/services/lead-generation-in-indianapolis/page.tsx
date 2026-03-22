import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Indianapolis | TML Agency",
  description: "TML offers expert lead generation services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation indianapolis", "lead generation agency indianapolis", "lead generation company indianapolis"],
};

export default function LeadGenerationInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
