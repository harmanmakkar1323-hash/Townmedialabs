import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Seattle | TML Agency",
  description: "TML offers expert website development services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development seattle", "website development agency seattle", "website development company seattle"],
};

export default function WebsiteDevelopmentInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
