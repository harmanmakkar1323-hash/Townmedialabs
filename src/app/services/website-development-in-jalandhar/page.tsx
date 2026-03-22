import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Jalandhar | TML Agency",
  description: "TML offers expert website development services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development jalandhar", "website development agency jalandhar", "website development company jalandhar"],
};

export default function WebsitedevelopmentInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
