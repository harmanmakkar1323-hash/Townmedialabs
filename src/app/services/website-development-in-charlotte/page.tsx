import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Charlotte | TML Agency",
  description: "TML offers expert website development services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development charlotte", "website development agency charlotte", "website development company charlotte"],
};

export default function WebsiteDevelopmentInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
