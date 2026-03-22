import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bournemouth | TML Agency",
  description: "TML offers expert video editing services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing bournemouth", "video editing agency bournemouth", "video editing company bournemouth"],
};

export default function VideoEditingInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
