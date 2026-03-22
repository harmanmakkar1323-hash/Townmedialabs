import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Los Angeles | TML Agency",
  description: "TML offers expert lead generation services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation los angeles", "lead generation agency los angeles", "lead generation company los angeles"],
};

export default function LeadGenerationInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
