import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Belfast | TML Agency",
  description: "TML offers expert website development services in Belfast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development belfast", "website development agency belfast", "website development company belfast"],
};

export default function WebsiteDevelopmentInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
