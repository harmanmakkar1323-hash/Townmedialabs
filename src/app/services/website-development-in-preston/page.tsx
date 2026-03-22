import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Preston | TML Agency",
  description: "TML offers expert website development services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development preston", "website development agency preston", "website development company preston"],
};

export default function WebsiteDevelopmentInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
