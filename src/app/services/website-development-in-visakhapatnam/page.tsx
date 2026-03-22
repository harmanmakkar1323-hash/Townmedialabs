import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert website development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development visakhapatnam", "website development agency visakhapatnam", "website development company visakhapatnam"],
};

export default function WebsitedevelopmentInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
