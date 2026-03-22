import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert website development services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development stoke-on-trent", "website development agency stoke-on-trent", "website development company stoke-on-trent"],
};

export default function WebsiteDevelopmentInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
