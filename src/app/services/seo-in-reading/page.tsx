import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Reading | TML Agency",
  description: "TML offers expert seo services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo reading", "seo agency reading", "seo company reading"],
};

export default function SeoInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
