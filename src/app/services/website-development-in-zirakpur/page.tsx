import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Zirakpur | TML Agency",
  description: "TML offers expert website development services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development zirakpur", "website development agency zirakpur", "website development company zirakpur"],
};

export default function WebsiteDevelopmentInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
