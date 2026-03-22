import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Francisco | TML Agency",
  description: "TML offers expert lead generation services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation san francisco", "lead generation agency san francisco", "lead generation company san francisco"],
};

export default function LeadGenerationInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
