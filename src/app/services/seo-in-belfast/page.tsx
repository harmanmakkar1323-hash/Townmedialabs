import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Belfast | TML Agency",
  description: "TML offers expert seo services in Belfast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo belfast", "seo agency belfast", "seo company belfast"],
};

export default function SeoInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
