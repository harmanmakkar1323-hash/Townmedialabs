import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Exeter | TML Agency",
  description: "TML offers expert website development services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development exeter", "website development agency exeter", "website development company exeter"],
};

export default function WebsiteDevelopmentInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
