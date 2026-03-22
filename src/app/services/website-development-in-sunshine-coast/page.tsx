import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert website development services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development sunshine coast", "website development agency sunshine coast", "website development company sunshine coast"],
};

export default function WebsiteDevelopmentInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
