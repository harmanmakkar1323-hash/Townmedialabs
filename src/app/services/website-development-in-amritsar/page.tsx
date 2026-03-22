import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Amritsar | TML Agency",
  description: "TML offers expert website development services in Amritsar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development amritsar", "website development agency amritsar", "website development company amritsar"],
};

export default function WebsitedevelopmentInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
