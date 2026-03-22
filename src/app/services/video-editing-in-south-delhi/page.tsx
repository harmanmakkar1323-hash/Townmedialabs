import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in South Delhi | TML Agency",
  description: "TML offers expert video editing services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing south delhi", "video editing agency south delhi", "video editing company south delhi"],
};

export default function VideoeditingInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
