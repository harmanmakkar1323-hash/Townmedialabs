import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Dallas | TML Agency",
  description: "TML offers expert video editing services in Dallas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing dallas", "video editing agency dallas", "video editing company dallas"],
};

export default function VideoEditingInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
