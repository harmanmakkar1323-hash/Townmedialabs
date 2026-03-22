import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Calgary | TML Agency",
  description: "TML offers expert seo services in Calgary, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo calgary", "seo agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
