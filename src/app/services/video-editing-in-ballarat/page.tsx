import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ballarat | TML Agency",
  description: "TML offers expert video editing services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing ballarat", "video editing agency ballarat", "video editing company ballarat"],
};

export default function VideoEditingInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
