import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Leicester | TML Agency",
  description: "TML offers expert seo services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo leicester", "seo agency leicester", "seo company leicester"],
};

export default function SeoInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
