import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Edmonton | TML Agency",
  description: "TML offers expert packaging design services in Edmonton, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design edmonton", "packaging design agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
