import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Leicester | TML Agency",
  description: "TML offers expert website development services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development leicester", "website development agency leicester", "website development company leicester"],
};

export default function WebsiteDevelopmentInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
