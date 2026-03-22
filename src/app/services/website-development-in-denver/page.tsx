import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Denver | TML Agency",
  description: "TML offers expert website development services in Denver. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development denver", "website development agency denver", "website development company denver"],
};

export default function WebsiteDevelopmentInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
