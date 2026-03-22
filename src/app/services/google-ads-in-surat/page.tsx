import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Surat | TML Agency",
  description: "TML offers expert Google Ads management services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management surat", "Google Ads management agency surat", "Google Ads management company surat"],
};

export default function GoogleadsInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
