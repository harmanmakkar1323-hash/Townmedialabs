import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bangalore | TML Agency",
  description: "TML offers expert lead generation services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation bangalore", "lead generation agency bangalore", "lead generation company bangalore"],
};

export default function LeadgenerationInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
