import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bangalore | TML Agency",
  description: "TML offers expert video editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bangalore", "video editing agency bangalore", "video editing company bangalore"],
};

export default function VideoeditingInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
