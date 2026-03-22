import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Raleigh | TML Agency",
  description: "TML offers expert website development services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development raleigh", "website development agency raleigh", "website development company raleigh"],
};

export default function WebsiteDevelopmentInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
