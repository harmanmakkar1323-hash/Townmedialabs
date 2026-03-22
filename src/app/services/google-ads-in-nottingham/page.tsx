import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Nottingham | TML Agency",
  description: "TML offers expert google ads services in Nottingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads nottingham", "google ads agency nottingham", "google ads company nottingham"],
};

export default function GoogleAdsInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
