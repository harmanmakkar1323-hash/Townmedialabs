import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Karnal | TML Agency",
  description: "TML offers expert lead generation services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation karnal", "lead generation agency karnal", "lead generation company karnal"],
};

export default function LeadgenerationInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
