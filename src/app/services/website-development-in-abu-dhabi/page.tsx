import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert website development services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development abu dhabi", "website development agency abu dhabi", "website development company abu dhabi"],
};

export default function WebsiteDevelopmentInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
