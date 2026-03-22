import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Portland | TML Agency",
  description: "TML offers expert lead generation services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation portland", "lead generation agency portland", "lead generation company portland"],
};

export default function LeadGenerationInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
