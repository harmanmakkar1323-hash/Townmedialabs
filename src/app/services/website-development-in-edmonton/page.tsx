import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Edmonton | TML Agency",
  description: "TML offers expert website development services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development edmonton", "website development agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
