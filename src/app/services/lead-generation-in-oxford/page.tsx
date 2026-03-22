import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Oxford | TML Agency",
  description: "TML offers expert lead generation services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation oxford", "lead generation agency oxford", "lead generation company oxford"],
};

export default function LeadGenerationInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
