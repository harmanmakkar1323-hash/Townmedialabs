import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Las Vegas | TML Agency",
  description: "TML offers expert video editing services in Las Vegas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing las vegas", "video editing agency las vegas", "video editing company las vegas"],
};

export default function VideoEditingInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
