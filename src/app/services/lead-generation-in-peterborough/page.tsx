import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Peterborough | TML Agency",
  description: "TML offers expert lead generation services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation peterborough", "lead generation agency peterborough", "lead generation company peterborough"],
};

export default function LeadGenerationInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
