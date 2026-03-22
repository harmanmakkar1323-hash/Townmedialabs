import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Derby | TML Agency",
  description: "TML offers expert website development services in Derby. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development derby", "website development agency derby", "website development company derby"],
};

export default function WebsiteDevelopmentInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
