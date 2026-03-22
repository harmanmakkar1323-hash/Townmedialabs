import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Milton Keynes | TML Agency",
  description: "TML offers expert lead generation services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation milton keynes", "lead generation agency milton keynes", "lead generation company milton keynes"],
};

export default function LeadGenerationInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
