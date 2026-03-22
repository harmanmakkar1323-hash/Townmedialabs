import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Baltimore | TML Agency",
  description: "TML offers expert website development services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development baltimore", "website development agency baltimore", "website development company baltimore"],
};

export default function WebsiteDevelopmentInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
