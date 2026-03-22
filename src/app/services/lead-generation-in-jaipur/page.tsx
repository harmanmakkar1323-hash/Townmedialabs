import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Jaipur | TML Agency",
  description: "TML offers expert lead generation services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation jaipur", "lead generation agency jaipur", "lead generation company jaipur"],
};

export default function LeadgenerationInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
