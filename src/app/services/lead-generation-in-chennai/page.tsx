import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Chennai | TML Agency",
  description: "TML offers expert lead generation services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation chennai", "lead generation agency chennai", "lead generation company chennai"],
};

export default function LeadgenerationInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
