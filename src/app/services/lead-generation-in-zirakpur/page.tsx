import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Zirakpur | TML Agency",
  description: "TML offers expert lead generation services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation zirakpur", "lead generation agency zirakpur", "lead generation company zirakpur"],
};

export default function LeadGenerationInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
