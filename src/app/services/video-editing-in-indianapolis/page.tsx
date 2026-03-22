import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Indianapolis | TML Agency",
  description: "TML offers expert video editing services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing indianapolis", "video editing agency indianapolis", "video editing company indianapolis"],
};

export default function VideoEditingInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
