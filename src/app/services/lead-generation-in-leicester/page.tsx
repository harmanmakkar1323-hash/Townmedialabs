import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Leicester | TML Agency",
  description: "TML offers expert lead generation services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation leicester", "lead generation agency leicester", "lead generation company leicester"],
};

export default function LeadGenerationInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
