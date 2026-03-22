import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Middlesbrough | TML Agency",
  description: "TML offers expert website development services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development middlesbrough", "website development agency middlesbrough", "website development company middlesbrough"],
};

export default function WebsiteDevelopmentInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
