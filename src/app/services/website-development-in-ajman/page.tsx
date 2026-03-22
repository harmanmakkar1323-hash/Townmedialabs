import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ajman | TML Agency",
  description: "TML offers expert website development services in Ajman. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ajman", "website development agency ajman", "website development company ajman"],
};

export default function WebsiteDevelopmentInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
