import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Honolulu | TML Agency",
  description: "TML offers expert video editing services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing honolulu", "video editing agency honolulu", "video editing company honolulu"],
};

export default function VideoEditingInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
