import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in York | TML Agency",
  description: "TML offers expert google ads services in York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads york", "google ads agency york", "google ads company york"],
};

export default function GoogleAdsInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
