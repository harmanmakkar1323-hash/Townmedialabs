import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Columbus | TML Agency",
  description: "TML offers expert video editing services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing columbus", "video editing agency columbus", "video editing company columbus"],
};

export default function VideoEditingInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
