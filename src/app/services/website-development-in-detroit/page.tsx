import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Detroit | TML Agency",
  description: "TML offers expert website development services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development detroit", "website development agency detroit", "website development company detroit"],
};

export default function WebsiteDevelopmentInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
