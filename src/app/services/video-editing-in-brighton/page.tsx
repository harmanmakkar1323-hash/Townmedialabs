import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Brighton | TML Agency",
  description: "TML offers expert video editing services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing brighton", "video editing agency brighton", "video editing company brighton"],
};

export default function VideoEditingInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
