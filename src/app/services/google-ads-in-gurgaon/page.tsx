import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Gurgaon | TML Agency",
  description: "TML offers expert Google Ads management services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management gurgaon", "Google Ads management agency gurgaon", "Google Ads management company gurgaon"],
};

export default function GoogleadsInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
