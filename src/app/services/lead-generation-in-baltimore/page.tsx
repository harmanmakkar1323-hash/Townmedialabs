import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Baltimore | TML Agency",
  description: "TML offers expert lead generation services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation baltimore", "lead generation agency baltimore", "lead generation company baltimore"],
};

export default function LeadGenerationInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
