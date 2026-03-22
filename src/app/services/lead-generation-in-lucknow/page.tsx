import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Lucknow | TML Agency",
  description: "TML offers expert lead generation services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation lucknow", "lead generation agency lucknow", "lead generation company lucknow"],
};

export default function LeadgenerationInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
