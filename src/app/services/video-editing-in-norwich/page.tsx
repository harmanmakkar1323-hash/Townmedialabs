import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Norwich | TML Agency",
  description: "TML offers expert video editing services in Norwich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing norwich", "video editing agency norwich", "video editing company norwich"],
};

export default function VideoEditingInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
