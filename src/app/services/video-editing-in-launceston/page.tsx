import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Launceston | TML Agency",
  description: "TML offers expert video editing services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing launceston", "video editing agency launceston", "video editing company launceston"],
};

export default function VideoEditingInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
