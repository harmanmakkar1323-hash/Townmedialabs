import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Nashville | TML Agency",
  description: "TML offers expert website development services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development nashville", "website development agency nashville", "website development company nashville"],
};

export default function WebsiteDevelopmentInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
