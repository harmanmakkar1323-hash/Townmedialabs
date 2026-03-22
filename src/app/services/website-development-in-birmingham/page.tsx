import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Birmingham | TML Agency",
  description: "TML offers expert website development services in Birmingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development birmingham", "website development agency birmingham", "website development company birmingham"],
};

export default function WebsiteDevelopmentInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
