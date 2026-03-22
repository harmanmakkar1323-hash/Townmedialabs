import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Amritsar | TML Agency",
  description: "TML offers expert lead generation services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation amritsar", "lead generation agency amritsar", "lead generation company amritsar"],
};

export default function LeadgenerationInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
