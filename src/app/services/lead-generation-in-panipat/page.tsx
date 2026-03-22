import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Panipat | TML Agency",
  description: "TML offers expert lead generation services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation panipat", "lead generation agency panipat", "lead generation company panipat"],
};

export default function LeadgenerationInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
