import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Rajkot | TML Agency",
  description: "TML offers expert lead generation services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation rajkot", "lead generation agency rajkot", "lead generation company rajkot"],
};

export default function LeadgenerationInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
