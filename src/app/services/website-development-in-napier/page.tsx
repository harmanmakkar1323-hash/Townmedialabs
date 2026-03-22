import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Napier | TML Agency",
  description: "TML offers expert website development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development napier", "website development agency napier", "website development napier nz"],
};

export default function WebsiteDevelopmentInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
