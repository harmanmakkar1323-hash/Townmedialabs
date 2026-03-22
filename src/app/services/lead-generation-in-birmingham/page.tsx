import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Birmingham | TML Agency",
  description: "TML offers expert lead generation services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation birmingham", "lead generation agency birmingham", "lead generation company birmingham"],
};

export default function LeadGenerationInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
