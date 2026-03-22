import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Canberra | TML Agency",
  description: "TML offers expert google ads services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads canberra", "google ads agency canberra", "google ads company canberra"],
};

export default function GoogleAdsInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
