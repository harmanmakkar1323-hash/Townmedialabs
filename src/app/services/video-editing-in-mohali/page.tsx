import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Mohali | TML Agency",
  description: "TML offers expert video editing services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing mohali", "video editing agency mohali", "video editing company mohali"],
};

export default function VideoeditingInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
