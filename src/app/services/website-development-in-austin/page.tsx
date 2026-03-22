import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Austin | TML Agency",
  description: "TML offers expert website development services in Austin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development austin", "website development agency austin", "website development company austin"],
};

export default function WebsiteDevelopmentInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
