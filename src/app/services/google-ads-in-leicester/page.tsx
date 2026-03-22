import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Leicester | TML Agency",
  description: "TML offers expert google ads services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads leicester", "google ads agency leicester", "google ads company leicester"],
};

export default function GoogleAdsInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
