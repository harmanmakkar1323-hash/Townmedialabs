import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Canberra | TML Agency",
  description: "TML offers expert seo services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo canberra", "seo agency canberra", "seo company canberra"],
};

export default function SeoInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
