import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Columbus | TML Agency",
  description: "TML offers expert lead generation services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation columbus", "lead generation agency columbus", "lead generation company columbus"],
};

export default function LeadGenerationInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
