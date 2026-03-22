import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Oxford | TML Agency",
  description: "TML offers expert seo services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo oxford", "seo agency oxford", "seo company oxford"],
};

export default function SeoInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
