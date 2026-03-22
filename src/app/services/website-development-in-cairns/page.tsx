import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cairns | TML Agency",
  description: "TML offers expert website development services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development cairns", "website development agency cairns", "website development company cairns"],
};

export default function WebsiteDevelopmentInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
