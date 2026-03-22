import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Wollongong | TML Agency",
  description: "TML offers expert google ads services in Wollongong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads wollongong", "google ads agency wollongong", "google ads company wollongong"],
};

export default function GoogleAdsInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
