import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Chennai | TML Agency",
  description: "TML offers expert website development services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development chennai", "website development agency chennai", "website development company chennai"],
};

export default function WebsitedevelopmentInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
