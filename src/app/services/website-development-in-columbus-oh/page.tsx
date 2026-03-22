import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Columbus | TML Agency",
  description: "TML offers expert website development services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development columbus", "website development agency columbus", "website development company columbus"],
};

export default function WebsiteDevelopmentInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
