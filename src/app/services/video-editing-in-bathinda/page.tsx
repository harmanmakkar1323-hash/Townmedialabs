import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bathinda | TML Agency",
  description: "TML offers expert video editing services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing bathinda", "video editing agency bathinda", "video editing company bathinda"],
};

export default function VideoEditingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
