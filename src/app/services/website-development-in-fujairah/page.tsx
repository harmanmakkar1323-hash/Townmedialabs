import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Fujairah | TML Agency",
  description: "TML offers expert website development services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development fujairah", "website development agency fujairah", "website development company fujairah"],
};

export default function WebsiteDevelopmentInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
