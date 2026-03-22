import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Delhi | TML Agency",
  description: "TML offers expert lead generation services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation delhi", "lead generation agency delhi", "lead generation company delhi"],
};

export default function LeadGenerationInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
