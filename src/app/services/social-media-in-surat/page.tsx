import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Surat | TML Agency",
  description: "TML offers expert social media marketing services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing surat", "social media marketing agency surat", "social media marketing company surat"],
};

export default function SocialmediaInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
