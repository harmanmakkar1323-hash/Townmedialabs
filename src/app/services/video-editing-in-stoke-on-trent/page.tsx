import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert video editing services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing stoke-on-trent", "video editing agency stoke-on-trent", "video editing company stoke-on-trent"],
};

export default function VideoEditingInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
