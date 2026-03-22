import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Hobart | TML Agency",
  description: "TML offers expert video editing services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing hobart", "video editing agency hobart", "video editing company hobart"],
};

export default function VideoEditingInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
