import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert video editing services in Ras Al Khaimah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing ras al khaimah", "video editing agency ras al khaimah", "video editing company ras al khaimah"],
};

export default function VideoEditingInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
