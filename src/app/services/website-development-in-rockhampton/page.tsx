import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Rockhampton | TML Agency",
  description: "TML offers expert website development services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development rockhampton", "website development agency rockhampton", "website development company rockhampton"],
};

export default function WebsiteDevelopmentInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
