import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ghaziabad | TML Agency",
  description: "TML offers expert website development services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ghaziabad", "website development agency ghaziabad", "website development company ghaziabad"],
};

export default function WebsitedevelopmentInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
