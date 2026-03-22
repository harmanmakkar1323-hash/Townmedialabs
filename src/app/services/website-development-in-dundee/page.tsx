import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Dundee | TML Agency",
  description: "TML offers expert website development services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development dundee", "website development agency dundee", "website development company dundee"],
};

export default function WebsiteDevelopmentInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
