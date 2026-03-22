import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Nagpur | TML Agency",
  description: "TML offers expert lead generation services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation nagpur", "lead generation agency nagpur", "lead generation company nagpur"],
};

export default function LeadgenerationInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
