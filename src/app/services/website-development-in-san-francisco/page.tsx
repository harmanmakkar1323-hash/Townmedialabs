import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in San Francisco | TML Agency",
  description: "TML offers expert website development services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development san francisco", "website development agency san francisco", "website development company san francisco"],
};

export default function WebsiteDevelopmentInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
