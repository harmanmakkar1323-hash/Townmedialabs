import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ballarat | TML Agency",
  description: "TML offers expert website development services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ballarat", "website development agency ballarat", "website development company ballarat"],
};

export default function WebsiteDevelopmentInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
