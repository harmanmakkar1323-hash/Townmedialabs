import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Miami | TML Agency",
  description: "TML offers expert website development services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development miami", "website development agency miami", "website development company miami"],
};

export default function WebsiteDevelopmentInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
