import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Brisbane | TML Agency",
  description: "TML offers expert website development services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development brisbane", "website development agency brisbane", "website development company brisbane"],
};

export default function WebsiteDevelopmentInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
