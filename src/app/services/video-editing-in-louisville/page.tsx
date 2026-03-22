import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Louisville | TML Agency",
  description: "TML offers expert video editing services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing louisville", "video editing agency louisville", "video editing company louisville"],
};

export default function VideoEditingInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
