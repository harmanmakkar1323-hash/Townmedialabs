import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Belfast | TML Agency",
  description: "TML offers expert lead generation services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation belfast", "lead generation agency belfast", "lead generation company belfast"],
};

export default function LeadGenerationInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
