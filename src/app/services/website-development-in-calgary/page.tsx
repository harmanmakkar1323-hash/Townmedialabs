import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Calgary | TML Agency",
  description: "TML offers expert website development services in Calgary, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development calgary", "website development agency calgary"],
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
