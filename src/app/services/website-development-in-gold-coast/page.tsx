import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Gold Coast | TML Agency",
  description: "TML offers expert website development services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development gold coast", "website development agency gold coast", "website development company gold coast"],
};

export default function WebsiteDevelopmentInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
