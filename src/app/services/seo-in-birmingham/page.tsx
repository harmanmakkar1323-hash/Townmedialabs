import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Birmingham | TML Agency",
  description: "TML offers expert seo services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo birmingham", "seo agency birmingham", "seo company birmingham"],
};

export default function SeoInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
