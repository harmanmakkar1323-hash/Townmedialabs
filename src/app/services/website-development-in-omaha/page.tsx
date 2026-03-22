import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Omaha | TML Agency",
  description: "TML offers expert website development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development omaha", "website development agency omaha", "website development company omaha"],
};

export default function WebsiteDevelopmentInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
