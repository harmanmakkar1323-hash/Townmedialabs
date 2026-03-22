import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Gold Coast | TML Agency",
  description: "TML offers expert branding services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding gold coast", "branding agency gold coast", "branding company gold coast"],
};

export default function BrandingInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
