import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sydney | TML Agency",
  description: "TML offers expert website development services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development sydney", "website development agency sydney", "website development company sydney"],
};

export default function WebsiteDevelopmentInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
