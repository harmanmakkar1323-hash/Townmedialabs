import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Virginia Beach | TML Agency",
  description: "TML offers expert website development services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development virginia beach", "website development agency virginia beach", "website development company virginia beach"],
};

export default function WebsiteDevelopmentInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
