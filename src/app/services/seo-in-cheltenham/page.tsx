import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cheltenham | TML Agency",
  description: "TML offers expert seo services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo cheltenham", "seo agency cheltenham", "seo company cheltenham"],
};

export default function SeoInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
