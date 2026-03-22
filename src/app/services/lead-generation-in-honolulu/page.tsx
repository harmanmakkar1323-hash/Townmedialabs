import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Honolulu | TML Agency",
  description: "TML offers expert lead generation services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation honolulu", "lead generation agency honolulu", "lead generation company honolulu"],
};

export default function LeadGenerationInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
