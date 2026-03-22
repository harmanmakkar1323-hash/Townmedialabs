import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Canberra | TML Agency",
  description: "TML offers expert website development services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development canberra", "website development agency canberra", "website development company canberra"],
};

export default function WebsiteDevelopmentInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
