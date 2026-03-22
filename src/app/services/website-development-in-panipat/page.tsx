import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Panipat | TML Agency",
  description: "TML offers expert website development services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development panipat", "website development agency panipat", "website development company panipat"],
};

export default function WebsitedevelopmentInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
