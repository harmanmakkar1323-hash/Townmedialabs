import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert google ads services in Umm Al Quwain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads umm al quwain", "google ads agency umm al quwain", "google ads company umm al quwain"],
};

export default function GoogleAdsInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
