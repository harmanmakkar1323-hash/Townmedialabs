import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Leeds | TML Agency",
  description: "TML offers expert lead generation services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation leeds", "lead generation agency leeds", "lead generation company leeds"],
};

export default function LeadGenerationInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
