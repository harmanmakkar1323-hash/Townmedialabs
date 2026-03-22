import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Punjab | TML Agency",
  description: "TML offers expert lead generation services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation punjab", "lead generation agency punjab", "lead generation company punjab"],
};

export default function LeadGenerationInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
