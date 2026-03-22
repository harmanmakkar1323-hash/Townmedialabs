import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Nagpur | TML Agency",
  description: "TML offers expert website development services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development nagpur", "website development agency nagpur", "website development company nagpur"],
};

export default function WebsitedevelopmentInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
