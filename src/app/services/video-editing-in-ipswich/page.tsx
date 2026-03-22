import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ipswich | TML Agency",
  description: "TML offers expert video editing services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ipswich", "video editing agency ipswich", "video editing company ipswich"],
};

export default function VideoEditingInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
