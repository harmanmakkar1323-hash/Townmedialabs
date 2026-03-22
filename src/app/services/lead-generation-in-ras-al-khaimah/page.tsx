import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert lead generation services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation ras al khaimah", "lead generation agency ras al khaimah", "lead generation company ras al khaimah"],
};

export default function LeadGenerationInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
