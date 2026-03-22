import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Leeds | TML Agency",
  description: "TML offers expert website development services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development leeds", "website development agency leeds", "website development company leeds"],
};

export default function WebsiteDevelopmentInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
