import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Milton Keynes | TML Agency",
  description: "TML offers expert seo services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo milton keynes", "seo agency milton keynes", "seo company milton keynes"],
};

export default function SeoInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
