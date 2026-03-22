import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ludhiana | TML Agency",
  description: "TML offers expert website development services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development ludhiana", "website development agency ludhiana", "website development company ludhiana"],
};

export default function WebsiteDevelopmentInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
