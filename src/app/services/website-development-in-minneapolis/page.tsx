import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Minneapolis | TML Agency",
  description: "TML offers expert website development services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development minneapolis", "website development agency minneapolis", "website development company minneapolis"],
};

export default function WebsiteDevelopmentInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
