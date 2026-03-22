import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Honolulu | TML Agency",
  description: "TML offers expert website development services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development honolulu", "website development agency honolulu", "website development company honolulu"],
};

export default function WebsiteDevelopmentInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
