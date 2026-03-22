import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Surat | TML Agency",
  description: "TML offers expert video editing services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing surat", "video editing agency surat", "video editing company surat"],
};

export default function VideoeditingInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
