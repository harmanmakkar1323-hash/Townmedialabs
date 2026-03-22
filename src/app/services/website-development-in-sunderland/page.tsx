import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sunderland | TML Agency",
  description: "TML offers expert website development services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development sunderland", "website development agency sunderland", "website development company sunderland"],
};

export default function WebsiteDevelopmentInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
