import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Delhi | TML Agency",
  description: "TML offers expert website development services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development delhi", "website development agency delhi", "website development company delhi"],
};

export default function WebsiteDevelopmentInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
