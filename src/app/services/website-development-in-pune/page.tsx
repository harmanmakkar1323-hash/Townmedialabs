import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Pune | TML Agency",
  description: "TML offers expert website development services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development pune", "website development agency pune", "website development company pune"],
};

export default function WebsitedevelopmentInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
