import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kharar | TML Agency",
  description: "TML offers expert video editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing kharar", "video editing agency kharar", "video editing company kharar"],
};

export default function VideoeditingInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
