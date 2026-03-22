import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert video editing services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing sunshine coast", "video editing agency sunshine coast", "video editing company sunshine coast"],
};

export default function VideoEditingInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
