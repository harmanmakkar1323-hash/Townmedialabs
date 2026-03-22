import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Perth | TML Agency",
  description: "TML offers expert video editing services in Perth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing perth", "video editing agency perth", "video editing company perth"],
};

export default function VideoEditingInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
