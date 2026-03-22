import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Boston | TML Agency",
  description: "TML offers expert website development services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development boston", "website development agency boston", "website development company boston"],
};

export default function WebsiteDevelopmentInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
