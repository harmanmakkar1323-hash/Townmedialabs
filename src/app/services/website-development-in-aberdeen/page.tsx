import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Aberdeen | TML Agency",
  description: "TML offers expert website development services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development aberdeen", "website development agency aberdeen", "website development company aberdeen"],
};

export default function WebsiteDevelopmentInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
