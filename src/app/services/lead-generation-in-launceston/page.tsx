import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Launceston | TML Agency",
  description: "TML offers expert lead generation services in Launceston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation launceston", "lead generation agency launceston", "lead generation company launceston"],
};

export default function LeadGenerationInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
