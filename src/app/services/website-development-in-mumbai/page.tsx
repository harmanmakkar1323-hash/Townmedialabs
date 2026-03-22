import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Mumbai | TML Agency",
  description: "TML offers expert website development services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development mumbai", "website development agency mumbai", "website development company mumbai"],
};

export default function WebsiteDevelopmentInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
