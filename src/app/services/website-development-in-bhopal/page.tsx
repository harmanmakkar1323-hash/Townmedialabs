import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bhopal | TML Agency",
  description: "TML offers expert website development services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bhopal", "website development agency bhopal", "website development company bhopal"],
};

export default function WebsitedevelopmentInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
