import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Jose | TML Agency",
  description: "TML offers expert lead generation services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation san jose", "lead generation agency san jose", "lead generation company san jose"],
};

export default function LeadGenerationInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
