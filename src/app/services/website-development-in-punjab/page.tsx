import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Punjab | TML Agency",
  description: "TML offers expert website development services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development punjab", "website development agency punjab", "website development company punjab"],
};

export default function WebsiteDevelopmentInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
