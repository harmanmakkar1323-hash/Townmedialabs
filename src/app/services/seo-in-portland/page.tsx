import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Portland | TML Agency",
  description: "TML offers expert seo services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo portland", "seo agency portland", "seo company portland"],
};

export default function SeoInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
