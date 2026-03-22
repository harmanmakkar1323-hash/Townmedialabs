import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Townsville | TML Agency",
  description: "TML offers expert website development services in Townsville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development townsville", "website development agency townsville", "website development company townsville"],
};

export default function WebsiteDevelopmentInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
