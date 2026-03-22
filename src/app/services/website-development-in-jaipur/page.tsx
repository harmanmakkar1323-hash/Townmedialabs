import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Jaipur | TML Agency",
  description: "TML offers expert website development services in Jaipur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development jaipur", "website development agency jaipur", "website development company jaipur"],
};

export default function WebsitedevelopmentInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
