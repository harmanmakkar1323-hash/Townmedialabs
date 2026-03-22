import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Toowoomba | TML Agency",
  description: "TML offers expert website development services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development toowoomba", "website development agency toowoomba", "website development company toowoomba"],
};

export default function WebsiteDevelopmentInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
