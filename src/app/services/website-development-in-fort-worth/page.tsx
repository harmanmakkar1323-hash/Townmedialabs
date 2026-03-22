import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Fort Worth | TML Agency",
  description: "TML offers expert website development services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development fort worth", "website development agency fort worth", "website development company fort worth"],
};

export default function WebsiteDevelopmentInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
