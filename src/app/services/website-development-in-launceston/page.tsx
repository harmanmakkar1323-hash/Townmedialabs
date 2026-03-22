import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Launceston | TML Agency",
  description: "TML offers expert website development services in Launceston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development launceston", "website development agency launceston", "website development company launceston"],
};

export default function WebsiteDevelopmentInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
