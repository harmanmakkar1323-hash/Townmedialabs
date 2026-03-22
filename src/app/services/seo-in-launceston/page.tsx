import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Launceston | TML Agency",
  description: "TML offers expert seo services in Launceston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo launceston", "seo agency launceston", "seo company launceston"],
};

export default function SeoInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
