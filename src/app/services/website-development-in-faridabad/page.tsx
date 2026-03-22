import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Faridabad | TML Agency",
  description: "TML offers expert website development services in Faridabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development faridabad", "website development agency faridabad", "website development company faridabad"],
};

export default function WebsitedevelopmentInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
