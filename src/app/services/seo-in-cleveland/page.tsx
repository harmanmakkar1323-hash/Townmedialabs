import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cleveland | TML Agency",
  description: "TML offers expert seo services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cleveland", "seo agency cleveland", "seo company cleveland"],
};

export default function SeoInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
