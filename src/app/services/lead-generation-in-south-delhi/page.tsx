import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in South Delhi | TML Agency",
  description: "TML offers expert lead generation services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation south delhi", "lead generation agency south delhi", "lead generation company south delhi"],
};

export default function LeadgenerationInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
