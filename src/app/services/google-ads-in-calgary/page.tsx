import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Calgary | TML Agency",
  description: "TML offers expert google ads services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads calgary", "google ads agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
