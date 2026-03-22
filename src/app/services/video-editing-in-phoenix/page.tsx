import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Phoenix | TML Agency",
  description: "TML offers expert video editing services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing phoenix", "video editing agency phoenix", "video editing company phoenix"],
};

export default function VideoEditingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
