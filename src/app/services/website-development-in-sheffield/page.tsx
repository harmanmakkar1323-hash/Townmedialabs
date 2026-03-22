import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sheffield | TML Agency",
  description: "TML offers expert website development services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development sheffield", "website development agency sheffield", "website development company sheffield"],
};

export default function WebsiteDevelopmentInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
