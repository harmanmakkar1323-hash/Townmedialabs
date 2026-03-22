import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Mohali | TML Agency",
  description: "TML offers expert lead generation services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation mohali", "lead generation agency mohali", "lead generation company mohali"],
};

export default function LeadgenerationInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
