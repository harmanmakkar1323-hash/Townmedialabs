import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Kharar | TML Agency",
  description: "TML offers expert lead generation services in Kharar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation kharar", "lead generation agency kharar", "lead generation company kharar"],
};

export default function LeadgenerationInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
