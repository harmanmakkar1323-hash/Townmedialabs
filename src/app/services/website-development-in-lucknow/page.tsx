import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Lucknow | TML Agency",
  description: "TML offers expert website development services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development lucknow", "website development agency lucknow", "website development company lucknow"],
};

export default function WebsitedevelopmentInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
