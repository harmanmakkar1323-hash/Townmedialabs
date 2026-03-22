import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Tampa | TML Agency",
  description: "TML offers expert website development services in Tampa. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development tampa", "website development agency tampa", "website development company tampa"],
};

export default function WebsiteDevelopmentInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
