import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Boise | TML Agency",
  description: "TML offers expert website development services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development boise", "website development agency boise", "website development company boise"],
};

export default function WebsiteDevelopmentInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
