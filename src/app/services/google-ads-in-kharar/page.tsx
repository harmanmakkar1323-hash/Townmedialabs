import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Kharar | TML Agency",
  description: "TML offers expert Google Ads management services in Kharar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management kharar", "Google Ads management agency kharar", "Google Ads management company kharar"],
};

export default function GoogleadsInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
