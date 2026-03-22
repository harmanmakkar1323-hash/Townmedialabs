import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ambala | TML Agency",
  description: "TML offers expert video editing services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing ambala", "video editing agency ambala", "video editing company ambala"],
};

export default function VideoeditingInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
